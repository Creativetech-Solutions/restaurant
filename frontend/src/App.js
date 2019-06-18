import React, { Component } from 'react';
import Home from './Home/Home';
import {Route} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import Product from './Product/Product';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/service' component={Service}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/menu' component={Menu}/>
          <Route exact path='/products/:productId' component={Product}/>
        <Footer/>
      </div>
    );
  }
}

export default App;