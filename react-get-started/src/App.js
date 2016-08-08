'use strict';

import 'material-design-lite/material';
import 'mdl-ext';
import React from 'react';
import MdlextSelectfield from './components/react-mdlext-selectfield';

const options = [
  { value: ""  , label: ""  },
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
      <MdlextSelectfield options={options} className="my-class" label="Select a value" floatingLabel value=""
             onChange={ (e) => {console.log( '***** onChange', e.target.value)}} />
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
