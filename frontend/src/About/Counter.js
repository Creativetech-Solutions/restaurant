import React from 'react';

function Counter(props) {
  return (
  	<section className="counter-section section center-text" id="counter">
        <div className="container">
                <div className="row">
                        <div className="col-sm-6 col-md-4">
                                <div className="mb-30 ">
                                        <i className="mlr-auto mb-30  icon-gradient icon-pizza"></i>
                                        <h2><b><span className="counter-value" data-duration="400" data-count="574">0</span></b>
                                        </h2>
                                        <h5 className="semi-black"><b>Pizza per day</b></h5>
                                </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                                <div className="mb-30">
                                        <i className="mlr-auto mb-30 icon-gradient icon-pasta"></i>
                                        <h2><b><span className="counter-value" data-duration="300"
                                                     data-count="3">0</span></b></h2>
                                        <h5 className="semi-black"><b>Pasta Chefs</b></h5>
                                </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                                <div className="mb-30">
                                        <i className="mlr-auto mb-30 icon-gradient icon-salad"></i>
                                        <h2><b><span className="counter-value" data-duration="1000" data-count="52">0</span></b>
                                        </h2>
                                        <h5 className="semi-black"><b>Salads per day</b></h5>
                                </div>
                        </div>

                </div>
        </div>
</section>
  );
}

export default Counter;