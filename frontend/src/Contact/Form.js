import React from 'react';

function Form(props) {
  return (
  	<section className="story-area left-text center-sm-text">
        <div className="container">
                <div className="heading">
                        <img className="heading-img" src="images/heading_logo.png" alt="" />
                        <h2>Say hello</h2>
                        <h5 className="mt-10 mb-30">Say hello, send us a message</h5>
                        <p className="mx-w-700x mlr-auto">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium
                                elit elementum quis. Enean porttitor eros non ultrices convallis.
                                Vivamus quis dolor ut arcu lobortis finibus a vitae leo. Sed eget tempus sem.
                                Nullam sed lacus sed metus tincidunt lobortis lobortis at nibh. Morbi euismod, arcu in gravida rhoncus</p>
                </div>

                <form className="form-style-1 placeholder-1">
                        <div className="row">
                                <div className="col-md-6"> <input className="mb-20" type="text" placeholder="Name"/>  </div>
                                <div className="col-md-6"> <input className="mb-20" type="text" placeholder="E-mail"/>  </div>
                                <div className="col-md-12"><input className="mb-20" type="text" placeholder="Subject"/>  </div>
                                <div className="col-md-12">
                                        <textarea className="h-200x ptb-20" placeholder="Message"></textarea></div>
                        </div>
                        <h6 className="center-text mtb-30"><a href="#" className="btn-primaryc plr-25"><b>SEND MESSAGE</b></a></h6>
                </form>
        </div>
	</section>
  );
}

export default Form;