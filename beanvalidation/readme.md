# Bean Validation - Blast from the past

## Bean Validation i JPA eller JAX-RS2

Gitt at vi har en JPA-entitet, eller en DTO som håndteres av REST-api.

```java
@Entity
public class User implements Serializable {
    private static final long serialVersionUID = 3665349089500867570L;

    @Id
    @Column(length=36)
    private String id  = UUID.randomUUID().toString();

    @Version
    private Long version;

    @Column(unique = true)
    @NotBlank(message="Empty user name")
    private String username;

    @NotBlank(message="Empty password")
    @Size(min = 8, message = "Password too short")
    private String password;

    @NotNull
    private Date validFrom;

    private Date validTo;

    public User(final String username, final String password,
      final Date validFrom, final Date validTo) {
        this.username = username;
        this.password = password;
        this.validFrom = validFrom;
        this.validTo = validTo;
    }
    public String getId()        { return id; }
    public String getUsername()  { return username; }
    public String getPassword()  { return password; }
    public Date   getValidFrom() { return validFrom; }
    public Date   getValidTo()   { return validTo; }
}
...

User u = new User("LOL", "LOLLOL", null, null);

// Bean Validation is triggered by JPA
em.persist(u);
```

## Tradisjonell JavaBean med bygger

Gitt av vi ønsker å validere en JavaBean før instansiering.

```java
public class UserDTO {
  private String username;
  private String password;
  private Date validFrom;
  private Date validTo;

  private User(Builder builder) {
    username = builder.username;
    password = builder.password;
    validFrom = builder.validFrom;
    validTo = builder.validTo;
  }
  public String getUsername()  { return username; }
  public String getPassword()  { return password; }
  public Date   getValidFrom() { return validFrom; }
  public Date   getValidTo()   { return validTo; }

  public static Builder with(final String username) {
    return new Builder(username);
  }

  public static class Builder {
    private String username;
    private String password;
    private Date validFrom;
    private Date validTo;

    private Builder() {
    }
    public Builder username(final String username) {
      checkArgument(!Strings.isNullOrEmpty(username) && password.trim().length() > 8)
      this.username = username;
    }
    public Builder password(final String password) {
      checkArgument(!Strings.isNullOrEmpty(password))
      this.password = password;
    }
    public Builder validFrom(final Date validFrom) {
      checkNotNull(validFrom);
      this.validFrom = validFrom;
    }
    public Builder validFrom(final Date validTo) {
      this.validTo = validTo;
    }
    public User build() {
      if(validTo != null && validFrom > validTo) {
        throw new IllgalStateException("Something went wrong :-(");
      }
      return new User(this);
    }
  }
}
....

// Validation is performed by the builder.
UserDTO u = UserDTO.with()
  .username("LOL").password("LOLLOL").validFrom(new Date()).build();

// ... but how do we validate the instance
// if the instance is created with e.g. GSON???  
```

## JavaBean med Bean Validation

Hvordan kan vi få både i pose og sekk ??

```java
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)

@AssertMethodAsTrue(value="isValid", message="Did not validate")

public class UserDTO {
  @NotBlank(message="Empty user name")
  private String username;

  @NotBlank(message="Empty password")
  @Size(min = 8, message = "Password too short")
  private String password;

  @NotNull
  private Date validFrom;

  private Date validTo;

  private User(Builder builder) {
    username = builder.username;
    password = builder.password;
    validFrom = builder.validFrom;
    validTo = builder.validTo;
  }

  public String getUsername()  { return username; }
  public String getPassword()  { return password; }
  public Date   getValidFrom() { return validFrom; }
  public Date   getValidTo()   { return validTo; }

  public boolean isValid() {
    return validTo != null && validFrom > validTo ? false : true;
  }

  public static Builder with(final String username) {
    return new Builder(username);
  }

  public static class Builder {
    private String username;
    private String password;
    private Date validFrom;
    private Date validTo;

    private Builder() {
    }
    public Builder username(final String username) {
      this.username = username;
    }
    public Builder password(final String password) {
      this.password = password;
    }
    public Builder validFrom(final Date validFrom) {
      this.validFrom = validFrom;
    }
    public Builder validFrom(final Date validTo) {
      this.validTo = validTo;
    }
    public User build() {
      return new User(this);
    }
  }
}
```

### AssertMethodAsTrue

```java
// Multiple properties validation,
// see: http://soadev.blogspot.no/2010/01/jsr-303-bean-validation.html
@Target( {TYPE, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = {AssertMethodAsTrueValidator.class} )
@Documented
public @interface AssertMethodAsTrue {
    String message() default "{value} returned false";
    String value() default "isValid";
    Class[] groups() default {};
    Class[] payload() default {};
}

```

### AssertMethodAsTrueValidator

```java
public class AssertMethodAsTrueValidator implements ConstraintValidator<AssertMethodAsTrue, Object> {
    private String methodName;

    @Override
    public void initialize(AssertMethodAsTrue assertMethodAsTrue) {
        methodName =  assertMethodAsTrue.value();
    }

    @Override
    @SuppressWarnings("unchecked")
    public boolean isValid(Object object, ConstraintValidatorContext constraintValidatorContext) {
        try {
            Class clazz = object.getClass();
            Method validate = clazz.getMethod(methodName);
            return (Boolean) validate.invoke(object);
        } catch (Throwable t) {
            SneakyThrow.exception(t);
        }
        return false;
    }
}
```

### ValidatiorHelper

```java
public class ValidatorHelper {
  private ValidatorHelper() {}

  public static <T> T validate(@NotNull final T bean) {
    if(bean == null) {
      throw new ConstraintViolationException(
      "Bean to validate may not be null.", new HashSet<>());
    }
    Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
    Set<ConstraintViolation<T>> constraintViolations = validator.validate(bean);
    if(!constraintViolations.isEmpty()) {
      ConstraintViolation<?> cv = constraintViolations.iterator().next();

      throw new ConstraintViolationException("Constraint(s) violated. " +
          "First violation is: " + cv.getPropertyPath() + ": "  + cv.getMessage(),
          new HashSet<ConstraintViolation<?>>(constraintViolations));
    }
    return bean;
  }
}

```

### Test
```java
@Test(expected = ConstraintViolationException.class)
public void userDTOWithBuilderIsNotValid() {
  UserDTO u = UserDTO.with()
    .username("LOL").password("lollol").validFrom(new Date()).build();

  ValidatorHelper.validate(u);
}

@Test(expected = ConstraintViolationException.class)
public void userDTOWithGsonIsNotValid() {
  String json = "{ \"username\": \"LOL\", \"password\": \"lollol\" }";

  Gson gson = new GsonBuilder()
    .registerTypeAdapter(
      String.class, GsonTypeAdapters.stringDeserializerEmptyToNull()
    ).create();

  UserDTO u = gson.fromJson(json, UserDTO.class);

  ValidatorHelper.validate(u);
}
```
