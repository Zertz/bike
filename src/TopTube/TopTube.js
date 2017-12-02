import React from 'react'
import PropTypes from 'prop-types'

import './TopTube.css'

const TopTube = ({
  wheelDiameter
}) => (
  <div className='TopTube' style={{ width: `${wheelDiameter - 1}em`}} />
)

TopTube.propTypes = {
  wheelDiameter: PropTypes.number.isRequired,
}

export default TopTube
