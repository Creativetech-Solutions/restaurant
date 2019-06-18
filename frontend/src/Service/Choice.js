import React from 'react';

function Choice(props) {
  return (
        <section className="story-area left-text center-sm-text">
            <div className="container">
                <div className="heading"><h3>Choose from Pizza</h3></div>
                <div className="row">
                        <div className="col-lg-3 col-md-4  col-sm-6 ">
                                <div className="center-text mb-30">
                                        <div className="ïmg-200x mlr-auto pos-relative">
                                                <h6 className="ribbon-cont color-white"><div className="ribbon primary"></div><b>OFFER</b></h6>
                                                <img src="images/seller-2-200x200.png" alt="" />
                                        </div>
                                        <h5 className="mt-20">Pizza Margherita</h5>
                                        <h4 className="mt-5 color-primary"><b>$11.90</b></h4>
                                </div>
                        </div>

                        <div className="col-lg-3 col-md-4  col-sm-6 ">
                                <div className="center-text mb-30">
                                        <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                                        <h5 className="mt-20">Pizza Margherita</h5>
                                        <h4 className="mt-5 color-primary"><b>$11.90</b></h4>
                                </div>
                        </div>

                        <div className="col-lg-3 col-md-4  col-sm-6 ">
                                <div className="center-text mb-30">
                                        <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                                        <h5 className="mt-20">Pizza Margherita</h5>
                                        <h4 className="mt-5 color-primary"><b>$11.90</b></h4>
                                </div>
                        </div>

                        <div className="col-lg-3 col-md-4  col-sm-6 ">
                                <div className="center-text mb-30">
                                        <div className="ïmg-200x mlr-auto pos-relative">
                                                <h6  className="ribbon-cont color-white"><div className="ribbon secondary"></div><b>SPECIALITY</b></h6>
                                                <img src="images/seller-2-200x200.png" alt=""/>
                                        </div>
                                        <h5 className="mt-20">Pizza Margherita</h5>
                                        <h4 className="mt-5 color-primary"><b>$11.90</b></h4>
                                </div>
                        </div>
                </div>
            </div>
        </section>
  );
}

export default Choice;

