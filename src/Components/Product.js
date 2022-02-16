import React from 'react';
import '../App.css';

function Product(props) {
  return(
    <div className="product">
      <p>Click me to buy a {props.type}!</p>
    </div>
  );
}

export default Product;
