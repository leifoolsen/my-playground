import React from 'react';  // eslint-disable-line no-unused-vars

class CartItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    initialQty: React.PropTypes.number
  };
  static defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 0
  };
  state = {
    qty: this.props.initialQty,
    total: 0
  };

  // Fat arrow function in combination with class properties syntax
  //increaseQty = () => this.increaseQty();

  constructor(props) {
    super(props);

    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    //this.increaseQty = this.increaseQty.bind(this);

    // Fat arrow functions preserve this context when they are called
    // this.increaseQty = () => this.increaseQty();

    // Function bind syntax, syntactic sugar for Function.prototype.bind()
    // Can use directly on tag, but not recommended
    this.increaseQty = ::this.increaseQty;
  }
  componentWillMount() {
    this.recalculateTotal();
  }
  increaseQty() {
    this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
  }
  decreaseQty() {
    let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
    this.setState({qty: newQty}, this.recalculateTotal);
  }
  recalculateTotal() {
    this.setState({total: this.state.qty * this.props.price});
  }
  render() {
    return <article className="row large-4">
      <figure className="text-center">
        <p>
          <img src={this.props.image}/>
        </p>
        <figcaption>
          <h2>{this.state.title}</h2>
        </figcaption>
      </figure>
      <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

      <p className="large-4 column">
        <button onClick={this.increaseQty} className="button success">+</button>
        <button onClick={::this.decreaseQty} className="button alert">-</button>
      </p>

      <p className="large-4 column"><strong>Price per item:</strong> ${this.props.price}</p>

      <h3 className="large-12 column text-center">
        Total: ${this.state.total}
      </h3>

    </article>;
  }
}
export default CartItem;
