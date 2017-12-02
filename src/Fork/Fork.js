import React from 'react'
import PropTypes from 'prop-types'

import './Fork.css'

const Fork = ({
  color,
  wheelDiameter
}) => (
  <div
    className='Fork'
    style={{
      color,
      height: `${wheelDiameter}em`,
      bottom: `${wheelDiameter / 2}em`
    }}
  />
)

Fork.propTypes = {
  color: PropTypes.string.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default Fork
