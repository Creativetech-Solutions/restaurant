import React, {Component} from 'react';
import {get} from '../Api';
import {addToCart} from '../Helper';

class Detail extends Component {
    constructor(props) {
        super(props);
        const {productId} = props;
        this.state = {
          productId: productId,
          product:null,
          quantity:1
        };

        console.log(this.state.productId);
    }

    async componentDidMount() {
        const product = (await get(`products/${this.state.productId}`)).data;
        this.setState({
          product:product,
        });
    }

    handleQuantityChange(e) {
        this.setState({ quantity: e.target.value });
    }

    addItemToCart(productId) {
        addToCart({productId:productId , quantity:this.state.quantity})
    }

    render() {
        const {product, quantity} = this.state;
        if (product === null) return <p>Loading ...</p>;
        return (
        
        <section className="story-area left-text center-sm-text">
        <div className="container">

                <div className="row">
                        <div className="col-md-6"><img className="mb-30" src="/images/seller-2-200x200.png" alt="" /></div>
                        <div className="col-md-6">
                            <div > <h3>{product.name}</h3> </div>
                            <p className="mb-15">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                                        lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                        massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                                        Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>

                            <p><strong>Price: </strong> {product.price}</p>
                            <div>
                                <form>
                                  <div className="form-group row">
                                    <label className="col-sm-3 col-form-label"><strong>Select Quantity:</strong> </label>
                                    <div className="col-sm-9">
                                      <input type="number" onChange={ this.handleQuantityChange.bind(this) } value={quantity} className="form-control" id="quantity" />
                                    </div>
                                  </div>
                                </form>
                            </div>

                            <h6 className="">
                                    <a onClick={() => this.addItemToCart(product._id)} className="btn-primaryc secondary plr-50 mlr-5 mb-10" href="#successModal" data-toggle="modal"><b>Add To Cart</b></a>
                            </h6>            
                        </div>
                </div>


        </div>
    </section>

      );
    }
}

export default Detail;