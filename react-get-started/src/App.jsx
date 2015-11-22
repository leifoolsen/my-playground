/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './components/cartItem';
/*eslint-disable no-unused-vars*/

const order = {
  title: 'Fresh fruits package',
  image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
  initialQty: 3,
  price: 8
};

ReactDOM.render(
  <CartItem title={order.title}
            image={order.image}
            initialQty={order.initialQty}
            price={order.price} />,
  document.querySelector('#react-mount')
);
