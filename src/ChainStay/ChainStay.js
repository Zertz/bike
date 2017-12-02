import React from 'react'
import PropTypes from 'prop-types'

import './ChainStay.css'

const ChainStay = ({
  color,
  wheelDiameter
}) => (
  <div
    className='ChainStay'
    style={{
      width: `${(wheelDiameter / 2) + 1.5}em`
    }}
  />
)

ChainStay.propTypes = {
  color: PropTypes.string.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default ChainStay
