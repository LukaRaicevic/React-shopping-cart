import React, { Component } from 'react';
import ProductItem from "./ProductItem.js"

class ProductComponent extends Component {
    render() {
        const list = this.props.products.map(prod => {
            return <ProductItem 
                        name={prod.name}
                        image={prod.image}
                        price={prod.price}
                        description={prod.price}
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