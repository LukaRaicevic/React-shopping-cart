import React, { Component } from 'react';

class ModalComponent extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-container">
                    <button className="close-button" onClick={this.props.toggleModal}>&times;</button>
                    <div className="modal-content">
                        <img src={this.props.image} />
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                        <button className="buy-button" onClick={this.props.handleAddToShoppingCart(this.props.product)}>Add to cart</button>
                    </div>           
                </div>
            </div>
        )
    }
}

export default ModalComponent;