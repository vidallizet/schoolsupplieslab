import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="999.00" />
        <Product type="Mechanical Pencil" price="0.25" />
        <Product type="College Ruled Loose Leaf" price="2.75" />
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;
