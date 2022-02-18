import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart: [] , 
        total: 0
    }
  }

  buy = (thing, price) => {
      this.setState((state) => {
          state.cart.push(thing)
          state.total += parseFloat(price)
          return state

      })
    }

  
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" buy = {this.buy}/>
        <Product type="Mechanical Pencil" price="0.25" buy = {this.buy}/>
        <Product type="College Ruled Loose Leaf" price="2.75" buy = {this.buy}/>
        <Product type="Eraser" price="8.00" buy = {this.buy}/>
        <Product type="Binder" price="10.00" buy = {this.buy}/>
        <Product type="Sharpie Markers" price="15.00" buy = {this.buy}/>
        <Product type="Portable Charger" price="30.00" buy = {this.buy}/>
        <Summary globalState={this.state}/>
      </div>
    );
  }
}

export default App;
