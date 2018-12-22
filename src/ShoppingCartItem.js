import React, {Component} from 'react';

class ShoppingCartItem extends Component {
    render() {
        return (
            <div className="shopping-cart-product">
                <div className="product-info">
                  <div>
                    <h3>{this.props.product.name}</h3>
                    <p>${this.props.product.price} &times; {this.props.product.quantity}</p>
                  </div>
                  <img src={this.props.product.image} />
                </div>
                <div className="product-count">
                  <button onClick={this.props.handleQuantityChange(this.props.product, "-")}>-</button>
                  <span>{this.props.product.quantity}</span>
                  <button onClick={this.props.handleQuantityChange(this.props.product, "+")}>+</button>
                </div>
              </div>
        )
    }
}

export default ShoppingCartItem;