import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {get} from '../Api';
import axios from 'axios';

class Seller extends Component {
    constructor(props) {
        super(props);

        this.state = {
          products: null,
        };
    }
    async componentDidMount() {
        const products = (await get("products", {limit:8})).data;
        this.setState({
          products,
        });
    }

    render() {
      return (
        
        <section className="story-area bg-seller color-white pos-relative">
                <div className="pos-bottom triangle-up"></div>
                <div className="pos-top triangle-bottom"></div>
                <div className="container">
                        <div className="heading">
                                <img className="heading-img" src="images/heading_logo.png" alt=""/>
                                <h2>Best Sellers</h2>
                        </div>

                        <div className="row">
                            {this.state.products === null && <p>Loading Pizzas...</p>}
                            { this.state.products && this.state.products.map(product => (
                                <div key={product._id} className="col-lg-3 col-md-4  col-sm-6 ">
                                        <div className="center-text mb-30">
                                                <div className="ïmg-200x mlr-auto pos-relative">
                                                        <h6 className="ribbon-cont"><div className="ribbon primary"></div><b>OFFER</b></h6>
                                                        <Link to={`/products/${product._id}`}><img src="images/seller-2-200x200.png" alt=""/></Link>
                                                </div>
                                                <h5 className="mt-20">{product.name}</h5>
                                                <h4 className="mt-5"><b>${product.price}</b></h4>
                                                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
                                        </div>
                                </div>
                                ))
                            }
                        </div>

                        <h6 className="center-text mt-40 mt-sm-20 mb-30"><a href="#" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
                </div>
        </section>

      );
    }
}

export default Seller;