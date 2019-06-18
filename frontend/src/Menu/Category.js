import React from 'react';

function Category(props) {
  return (
    <section>
        <div className="container">
                <div className="heading">
                        <img className="heading-img" src="images/heading_logo.png" alt=""/>
                        <h2>Our Menu</h2>
                </div>

                <div className="row">
                        <div className="col-sm-12">
                                <ul className="selecton brdr-b-primary mb-70">
                                        <li><a className="active" href="#" data-select="*"><b>ALL</b></a></li>
                                        <li><a href="#" data-select="pizza"><b>PIZZA</b></a></li>
                                        <li><a href="#" data-select="pasta"><b>PASTA</b></a></li>
                                        <li><a href="#" data-select="salads"><b>SALADS</b></a></li>
                                        <li><a href="#" data-select="deserts"><b>DESERTS</b></a></li>
                                </ul>
                        </div>
                </div>

                <div className="row">
                        <div className="col-md-6 food-menu pizza">
                                <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src="images/menu-1-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Pizza Margherita</b><b className="color-primary float-right">$12.00</b></h5>
                                                <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu pizza pasta">
                                <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src="images/menu-2-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Italian pasta</b><b className="color-primary float-right">$20.00</b></h5>
                                                <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu pasta">
                                <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src="images/menu-3-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Pizza Prosciuto</b><b className="color-primary float-right">$12.00</b></h5>
                                                <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu salads">
                                <div className="sided-90x mb-30">
                                        <div className="s-left"><img className="br-3" src="images/menu-4-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Broschettas</b><b className="color-primary float-right">$6.00</b></h5>
                                                <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                                        </div>
                                </div>
                        </div>
                        <div className="col-md-6 food-menu deserts">
                                <div className="sided-90x mb-30">
                                        <div className="s-left"><img className="br-3" src="images/menu-5-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Pizza Margherita</b><b className="color-primary float-right">$12.00</b></h5>
                                                <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu pizza">
                                <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src="images/menu-6-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Italian pasta</b><b className="color-primary float-right">$20.00</b></h5>
                                                <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu deserts">
                                <div className="sided-90x mb-30">
                                        <div className="s-left"><img className="br-3" src="images/menu-7-120x120.jpg"  alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Pizza Prosciuto</b><b className="color-primary float-right">$12.00</b></h5>
                                                <p className="pr-70">Maecenas fermentum tortor id fringilla  molestie. In hac habitasse platea dictumst. </p>
                                        </div>
                                </div>
                        </div>

                        <div className="col-md-6 food-menu pasta">
                                <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src="images/menu-8-120x120.jpg" alt="Menu Image"/></div>
                                        <div className="s-right">
                                                <h5 className="mb-10"><b>Broschettas</b><b className="color-primary float-right">$6.00</b></h5>
                                                <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                                        </div>
                                </div>
                        </div>
                </div>

                <h6 className="center-text mt-40 mt-sm-20 mb-30"><a href="#" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
        </div>
</section>

  );
}

export default Category;