import React from 'react';

function AddToCartModal(props) {
  return (
    <article className="col-md-4 well">
        <div className="modal fade" id="successModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header modal-header-success">
                        <h4>Item Added</h4>
                    </div>
                    <div className="modal-body">
                        <p>An item has been successfully added to your cart</p>
                    </div>
                    <div className="clearfix"></div>
                    <div className="modal-footer">
                        <button type="button" className="btn-primaryc plr-50 mlr-5 mb-10" data-dismiss="modal">View Cart</button>
                        <button type="button" className="btn-primaryc secondary plr-50 mlr-5 mb-10" data-next="modal">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  );
}

export default AddToCartModal;