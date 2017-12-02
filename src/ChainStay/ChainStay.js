import React from 'react'
import PropTypes from 'prop-types'

import './ChainStay.css'

const ChainStay = ({
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
  wheelDiameter: PropTypes.number.isRequired
}

export default ChainStay
