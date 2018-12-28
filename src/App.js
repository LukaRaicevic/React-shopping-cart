import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent.js';
import ProductComponent from './ProductComponent.js';
import ShoppingCartComponent from './ShoppingCartComponent.js';

class App extends Component {
  state = {
    products: [
      
    ],
    shoppingCartProducts: {},
    total: 0
  }

  addProduct = product => {
    product = {
      ...product,
      id: this.state.products.length + 1
    }
    this.setState({ products: [...this.state.products, product]}, () => {
      localStorage.setItem("products", JSON.stringify(this.state.products));
    });
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
      total
    })
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    setTimeout(() => {
      this.setState({ products: products || [] });
    }, 1000);
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
