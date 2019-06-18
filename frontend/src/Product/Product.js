import React, {Component} from 'react';
import Banner from './Banner';
import Detail from './Detail';
import AddToCartModal from './AddToCartModal';

class Product extends Component {
	constructor(props) {
		super(props);
	    const { match: { params } } = this.props;
		this.state = {
		  productId: params.productId,
		};

	}

	render() {

	  return (
	  	<div>
		    <Banner/>
		    <Detail productId = {this.state.productId}/>
		    <AddToCartModal/>
	    </div>
	  );
	}
}

export default Product;