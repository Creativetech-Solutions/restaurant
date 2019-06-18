import React from 'react';

function Feedback(props) {
  return (
  	<section className="story-area bg-seller color-white pos-relative">
        <div className="pos-bottom triangle-up"></div>
        <div className="pos-top triangle-bottom"></div>
        <div className="container">
                <div className="heading">
                        <img className="heading-img" src="images/heading_logo.png" alt="" />
                        <h2>What Clients Say</h2>
                </div>

                <div className="swiper-container" data-slide-effect="slide" data-autoheight="false" data-swiper-speed="500" data-swiper-margin="25" data-swiper-slides-per-view="3"
                     data-swiper-breakpoints="true" data-scrollbar="true" data-swiper-loop="true" data-swpr-responsive="[1, 2, 2, 2]">

                        <div className="swiper-wrapper pb-90 pb-sm-60 left-text center-sm-text">
                                <div className="swiper-slide">
                                        <h4>Amazing Pizza</h4>
                                        <p className="color-ash mb-50 mb-sm-30 mt-20">Etiam nec odio vestibulum est mattis
                                                efficiturut magna.Pellentesquesit amet tellus blandit. Etiam nec odio
                                                vestibulum est mattis
                                                effic iturut magna. Pellentesque sit am et tellus blandit. Etiamnec odio
                                                vestibul. </p>
                                        <img className="circle-60 mb-20 " src="images/quoto-1-200x200.jpg" alt="" />
                                        <h6><b className="color-primary">Daiane Smith</b>,<b className="color-ash">Customer</b>
                                        </h6>
                                </div>

                                <div className="swiper-slide">
                                        <h4>Amazing Pizza</h4>
                                        <p className="color-ash mb-50 mb-sm-30 mt-20">Etiam nec odio vestibulum est mattis
                                                efficiturut magna.Pellentesquesit amet tellus blandit. Etiam nec
                                                odio vestibulum est mattis
                                                effic iturut magna. Pellentesque sit am et tellus blandit.
                                                Etiamnec odio vestibul. </p>
                                        <img className="circle-60 mb-20" src="images/quoto-2-200x200.jpg" alt="" />
                                        <h6><b className="color-primary">Daiane Smith</b>,<b className="color-ash">Customer</b>
                                        </h6>
                                </div>

                                <div className="swiper-slide">
                                        <h4>The best pastas in town</h4>
                                        <p className="color-ash mb-50 mb-sm-30 mt-20">Nec odio vestibulum est mattis
                                                effic iturut
                                                magna. Pellentesque sit am et tellus blandit.
                                                Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
                                                iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio. </p>
                                        <img className="circle-60 mb-20" src="images/quoto-3-200x200.jpg"
                                             alt="" />
                                        <h6><b className="color-primary">Michael Williams</b>,<b
                                                className="color-ash">Customer</b></h6>
                                </div>

                                <div className="swiper-slide">
                                        <h4>We love it there</h4>
                                        <p className="color-ash mb-50 mb-sm-30 mt-20">Retiam nec odio vestibulum est
                                                mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est
                                                mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                        <img className="circle-60 mb-20"
                                             src="images/quoto-1-200x200.jpg" alt="" />
                                        <h6><b className="color-primary">Shawn Gaines</b>,<b className="color-ash">Customer</b>
                                        </h6>
                                </div>
                        </div>

                        <div className="swiper-pagination"></div>
                </div>
        </div>
</section>
  );
}

export default Feedback;