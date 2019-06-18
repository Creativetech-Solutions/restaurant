import React from 'react';
import Banner from './Banner';
import Story from './Story';
import Seller from './Seller';
import Menu from '../Menu/Category';

function Home(props) {
  return (
  	<div>
	    <Banner/>
	    <Story/>
	    <Seller/>
	    <Menu/>
    </div>
  );
}

export default Home;