import React from 'react'
import PropTypes from 'prop-types'

import './SeatTube.css'

const SeatTube = ({
  wheelDiameter
}) => (
  <div
    className='SeatTube'
    style={{
      height: `${(wheelDiameter / 2) + 2}em`,
      right: `${(wheelDiameter / 2) - 0.625}em`
    }}
  />
)

SeatTube.propTypes = {
  wheelDiameter: PropTypes.number.isRequired
}

export default SeatTube
