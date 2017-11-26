import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wheel />, div);
});
