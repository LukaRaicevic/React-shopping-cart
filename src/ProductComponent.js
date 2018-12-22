import React, { Component } from 'react';
import ProductItem from "./ProductItem.js"

class ProductComponent extends Component {
    render() {
        const list = this.props.products.map(prod => {
            return <ProductItem
                        handleAddToShoppingCart={this.props.handleAddToShoppingCart}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price}
                        description={prod.price}
                        product={prod}
                    />
        })
        return (
            <div className="list-products">
                {list}
            </div>
        );
    }
}

export default ProductComponent;