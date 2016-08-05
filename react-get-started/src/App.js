'use strict';

import React from 'react';
import Hello from './components/Hello';

const items = [
  { value: "#0", label: ""  },
  { value: "#1", label: "One"  },
  { value: "#2", label: "Two"  },
  { value: "#3", label: "Three"},
  { value: "#4", label: "Four" },
  { value: "#5", label: "Five" },
  { value: "#6", label: "Six"  }
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
      <Hello items={items} value="#3" label="A label goes here"/>
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
