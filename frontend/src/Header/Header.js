import React, {Component} from 'react';
import logo from '../assets/images/logo-white.png'
import {Link} from 'react-router-dom';
import './Header.css';
import ViewCart from '../Cart/ViewCart';

class Header extends Component {

   /* function toggle() {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }*/

    render() {
      return (
        <header>
            <ViewCart/>
            <div className="container">
                    <a className="logo" ><img src={logo} alt={logo} /></a>

                    <div className="right-area">
                            <h6><a className="plr-20 color-white btn-fill-primary" >ORDER: +34 685 778 8892</a></h6>
                    </div>

                    <a className="menu-nav-icon" data-menu="#main-menu" ><i className="ion-navicon"></i></a>

                    <ul className="main-menu font-mountainsre" id="main-menu">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/menu">MENU</Link></li>
                            <li><Link to="/about">ABOUT US</Link></li>
                            <li><Link to="/service">SERVICES</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><a onClick={this.toggle}><i className="ion-ios-cart cart-icon"></i></a></li>
                    </ul>

                    <div className="clearfix"></div>
            </div>
        </header>

      );
    }
}

export default Header;