import React, { Component } from 'react';
import ProductItem from "./ProductItem.js";
import Spinner from "./Spinner";

function If(props) {
    return props.condition ? props.children : null;
}

class ProductComponent extends Component {
    render() {
        const list = this.props.products.map(prod => {
            return <ProductItem
                        handleAddToShoppingCart={this.props.handleAddToShoppingCart}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price}
                        description={prod.description}
                        product={prod}
                    />
        })
        return (
            <div className="list-products">
            <If condition={this.props.products.length === 0}>
                <Spinner />
            </If>
                {list}
            </div>
        );
    }
}

export default ProductComponent;