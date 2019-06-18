import React from 'react';

function Banner(props) {
  return (
    <section className="bg-1 h-900x main-slider pos-relative">
        <div className="triangle-up pos-bottom"></div>
        <div className="container h-100">
                <div className="dplay-tbl">
                        <div className="dplay-tbl-cell center-text color-white">

                                <h5><b>BEST IN TOWN</b></h5>
                                <h1 className="mt-30 mb-15">Pizza & Pasta</h1>
                                <h5><a href="#" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h5>
                        </div>
                </div>
        </div>
	</section>

  );
}

export default Banner;