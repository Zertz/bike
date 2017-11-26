import React from 'react';

import Frame from '../Frame';
import Wheel from '../Wheel';

import './Bike.css';

const Bike = props => {
	return (
		<div className='Bike'>
			<Wheel />
      <Frame />
			<Wheel />
		</div>
	);
};

export default Bike;
