import React from 'react'
import PropTypes from 'prop-types'

import './SeatStay.css'

const SeatStay = ({
  wheelDiameter
}) => (
  <div
    className='SeatStay'
    style={{
      width: `${(wheelDiameter / 2) + 3.5}em`
    }}
  />
)

SeatStay.propTypes = {
  wheelDiameter: PropTypes.number.isRequired
}

export default SeatStay
