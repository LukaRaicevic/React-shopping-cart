import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent.js';
import ProductComponent from './ProductComponent.js';
import ShoppingCartComponent from './ShoppingCartComponent.js';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Sample Watch", price: 199, description: "Lorem ipsum...", image: "https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" },
      { id: 2, name: "Product #2", price: 230, description: "Lorem ipsum...", image: "https://pl.shadestation.com/media/thumbs/350x350/media/product_images/Fossil-Watches-FS5439fw350fh350.jpg" }
    ]
  }

  addProduct = product => {
    product = {
      ...product,
      id: this.state.products.length + 1
    }
    this.setState({ products: [...this.state.products, product]});
  }

  render() {
    return (
        <div className="container">
          <FormComponent addProduct={this.addProduct}/>
          
          <ProductComponent products={this.state.products} />
          
          <ShoppingCartComponent />
        </div>
    );
  }
}

export default App;
