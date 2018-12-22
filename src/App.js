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
    ],
    shoppingCartProducts: {},
    total: 0
  }

  addProduct = product => {
    product = {
      ...product,
      id: this.state.products.length + 1
    }
    this.setState({ products: [...this.state.products, product]});
  }

  addToShoppingCart = obj => {
    return event => {
      const tempCartProducts = {
        ...this.state.shoppingCartProducts,
        [obj.id]: this.state.shoppingCartProducts[obj.id] || obj
      }
  
      if(!tempCartProducts[obj.id].quantity) {
        tempCartProducts[obj.id].quantity = 0;
      }
      tempCartProducts[obj.id].quantity++;

      this.setState({
        shoppingCartProducts: tempCartProducts
      }, this.total)
    }
  }

  handleQuantityChange = (obj, sign) => {
    return event => {
      const tempCartProducts = {
        ...this.state.shoppingCartProducts,
        [obj.id]: this.state.shoppingCartProducts[obj.id] || obj
      }

      if(sign === "+") {
        tempCartProducts[obj.id].quantity++;
      } else {
        tempCartProducts[obj.id].quantity--;
        if(tempCartProducts[obj.id].quantity < 1) {
          delete tempCartProducts[obj.id];
        }
      }

      this.setState({
        shoppingCartProducts: tempCartProducts
      }, this.total)
    }
  }

  total = () => {
    const total = Object.values(this.state.shoppingCartProducts).reduce((res, prod) => {
      res += (prod.price * prod.quantity);
      return res;
    }, 0);
    console.log(total)
  
    this.setState({
      total: total
    })
  }
  

  render() {
    return (
        <div className="container">
          <FormComponent addProduct={this.addProduct}/>
          
          <ProductComponent products={this.state.products} handleAddToShoppingCart={this.addToShoppingCart} />
          
          <ShoppingCartComponent shoppingCartProducts={this.state.shoppingCartProducts} handleAddToShoppingCart={this.addToShoppingCart} handleQuantityChange={this.handleQuantityChange} total={this.state.total} />
        </div>
    );
  }
}

export default App;
