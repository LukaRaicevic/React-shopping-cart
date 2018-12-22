import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCartComponent extends Component {
    render() {
        const list = Object.values(this.props.shoppingCartProducts).map(prod => {
          return <ShoppingCartItem
                    product={prod}
                    handleAddToShoppingCart={this.props.handleAddToShoppingCart}
                    handleQuantityChange={this.props.handleQuantityChange}
                  />
        })
        return (
            <div className="shopping-cart">
            <div className="shopping-cart-products">
              {list} 
            </div>
            <div className="shopping-cart-summary">
              <div>Total: <b>${this.props.total}</b></div>
              <div><button>Purchase</button></div>
            </div>
          </div>
        );
    }
}

export default ShoppingCartComponent;