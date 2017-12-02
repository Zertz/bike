import React from 'react'
import PropTypes from 'prop-types'

import './SeatTube.css'

const SeatTube = ({
  speed,
  wheelDiameter
}) => (
  <div
    className='SeatTube'
    style={{
      animationDuration: `${((1 - 10) * (speed / 100)) + 10}s`,
      height: `${(wheelDiameter / 2) + 2}em`,
      right: `${(wheelDiameter / 2) - 0.625}em`
    }}
  />
)

SeatTube.propTypes = {
  speed: PropTypes.number.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default SeatTube
