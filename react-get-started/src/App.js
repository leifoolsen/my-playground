'use strict';

import React from 'react';
import Hello from './components/Hello';

const items = [
  {id: 1, value: "#1", label: "One"  },
  {id: 2, value: "#2", label: "Two"  },
  {id: 3, value: "#3", label: "Three"},
  {id: 4, value: "#4", label: "Four" },
  {id: 5, value: "#5", label: "Five" },
  {id: 6, value: "#6", label: "Six"  }
];

const order = {
  title: 'Fresh fruits package',
  image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
  initialQty: 3,
  price: 8
};


class App extends React.Component {
  render() {
    return (
      <Hello phrase="es6" items={items} />
    )
  }
}

export default App;

/*
 <CartItem title={order.title}
 image={order.image}
 initialQty={order.initialQty}
 price={order.price} />

 */
