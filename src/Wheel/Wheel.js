import React from 'react'
import PropTypes from 'prop-types'

import Spoke from '../Spoke'

import './Wheel.css'

const Wheel = ({ spokes }) => (
  <div className='Wheel'>
    {[...Array(spokes).keys()].map(i => (
      <Spoke key={i} total={spokes} index={i} />
    ))}
  </div>
)

Wheel.defaultProps = {
  spokes: 12
}

Wheel.propTypes = {
  spokes: PropTypes.number
}

export default Wheel
