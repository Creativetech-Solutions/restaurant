import React from 'react';

function Self(props) {
  return (
  	<section className="story-area left-text center-sm-text">
        <div className="container">

                <div className="row">
                        <div className="col-md-6"><img className="mb-30" src="images/about-1-600x400.jpg" alt="" /></div>
                        <div className="col-md-6"><img className="mb-30" src="images/about-2-600x400.jpg" alt="" /></div>
                        <div className="col-md-12">
                                <div className="mt-50 mt-sm-30 mb-50 mb-sm-30 center-text"> <h2>We are Lugais</h2> </div>

                                <h5 className="center-text mb-50 mb-sm-30 plr-25">Maecenas fermentum tortor id
                                        fringilla molestie. In  hac habitasse platea dictumst. Morbi maximus lobortis
                                        ipsum, ut blandit augue ullamcorper vitae.  Nulla dignissim leo felis, eget
                                        cursus elit aliquet ut.</h5>
                        </div>
                        <div className="col-md-6">
                                <p className="mb-15">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                                        lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                        massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                                        Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
                        </div>

                        <div className="col-md-6">
                                <p className="mb-15">Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                                        platea
                                        dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                                        Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                                        convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                                        Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                                        pibus dolor, accursus nulla. </p>
                        </div>
                </div>

                <h6 className="center-text mt-40 mt-sm-30 mb-20">
                        <a href="#" className="btn-primaryc plr-25 mb-10 mlr-5"><b>SEE TODAYS MENU</b></a>
                        <a href="#" className="btn-primaryc secondary plr-50 mlr-5 mb-10"><b>ORDER NOW</b></a>
                </h6>

        </div>
    </section>
  );
}

export default Self;