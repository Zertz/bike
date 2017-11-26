import React from 'react';
import ReactDOM from 'react-dom';
import Bike from './Bike';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bike />, div);
});
