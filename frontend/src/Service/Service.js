import React from 'react';
import Banner from './Banner';
import Choice from './Choice';
import Pizzalist from './Pizzalist';
import OrderNow from './OrderNow';

function Service(props) {
  return (
  	<div>
  		<Banner/>
  		<Choice/>
  		<OrderNow/>
  		<Pizzalist/>
    </div>
  );
}

export default Service;