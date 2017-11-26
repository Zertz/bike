import React from 'react';
import PropTypes from 'prop-types';

import './Spoke.css';

const Spoke = ({
  index,
  total,
}) => (
  <div className='Spoke' style={{ transform: `rotate(${(360 / total) * index}deg)` }} />
);

Spoke.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Spoke;
