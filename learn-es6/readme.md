# EcmaScript2015/2016

```
npm install
npm run dev
http://localhost:8080/webpack-dev-server/
```

## ES5 => EcmaScript 2015 / 2016

### $
```javascript
const element = document.querySelector('#some-id');
console.log(element);
```

### $$
```javascript
const elements = document.querySelectorAll('div');
for (let el of elements) console.log(el);
```

### Ajax

Native

```javascript
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}

request.open('GET', 'test.html', true);
request.send(null);
console.log(request.response);
```


JQuery

```javascript
$.get('test.html', function(data, status){
  console.log('Status: ', status, ' Data: ', data);
});
```

EcmaScript2015

```javascript
fetch('test.html', { method: 'get' } )
  .then(response => response.text())
  .then(text => {
    console.log(text);
  })
  .catch(err => console.error(err));
```
  

### Arrow Functions
Binds lexical this

Specifying arguments:
```javascript
    () => { ... } // no argument
     x => { ... } // one argument
(x, y) => { ... } // several arguments
```

Specifying a body:
```javascript
x => { return x * x }  // block
x => x * x  // expression, equivalent to previous line
```

```javascript
let r = [1, 2, 3].map(n => n * 2);
console.log(r);
```


## Nyttige lenker
* [ECMAScript 6 equivalents in ES5](https://github.com/addyosmani/es6-equivalents-in-es5)
* [ES6 feature documentation and examples](https://github.com/jedrichards/es6#array-destructuring)
