import React, { Component } from 'react';

class ShoppingCartComponent extends Component {
    render() {
        return (
            <div className="shopping-cart">
            <div className="shopping-cart-products">
              <div className="shopping-cart-product">
                <div className="product-info">
                  <div>
                    <h3>Sample Watch</h3>
                    <p>$199 &times; 1</p>
                  </div>
                  <img src="https://sc02.alicdn.com/kf/HTB1gHRfg6uhSKJjSspmq6AQDpXaI/Accept-Sample-Design-Your-Own-Blank-Wrist.jpg_350x350.jpg" />
                </div>
                <div className="product-count">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              
              <div className="shopping-cart-product">
                <div className="product-info">
                  <div>
                    <h3>Product #2</h3>
                    <p>$230 &times; 1</p>
                  </div>
                  <img src="https://pl.shadestation.com/media/thumbs/350x350/media/product_images/Fossil-Watches-FS5439fw350fh350.jpg" />
                </div>
                <div className="product-count">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
              
            </div>
            <div className="shopping-cart-summary">
              <div>Total: <b>$429</b></div>
              <div><button>Purchase</button></div>
            </div>
          </div>
        );
    }
}

export default ShoppingCartComponent;