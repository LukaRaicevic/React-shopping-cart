import React, { Component } from 'react';
import ModalComponent from "./ModalComponent"

function If(props) {
    return props.condition ? props.children : null;
}

class ProductItem extends Component {
    state = {
        displayModal: false
    }

    toggleModal = event => {
        this.setState(prevState => ({ displayModal: !prevState.displayModal }));
    }

    render() {
        return (
            <div className="product">
              <img src={this.props.image} />
              <p>{this.props.name}</p>
              <p>${this.props.price}</p>
              <button className="details-button" onClick={this.toggleModal}>Details</button>
              <button className="buy-button" onClick={this.props.handleAddToShoppingCart(this.props.product)}>Buy</button>
              <If condition={this.state.displayModal}>
                <ModalComponent toggleModal={this.toggleModal} {...this.props} />
              </If>
            </div>
        );
    }
}

export default ProductItem;