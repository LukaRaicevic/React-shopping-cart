import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="product">
              <img src={this.props.image} />
              <p>{this.props.name}</p>
              <p>${this.props.price}</p>
              <button className="details-button">Details</button>
              <button className="buy-button" onClick={this.props.handleAddToShoppingCart(this.props.product)}>Buy</button>
            </div>
        );
    }
}

export default ProductItem;