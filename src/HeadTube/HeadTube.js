import React from 'react'
import PropTypes from 'prop-types'

import './HeadTube.css'

const HeadTube = ({
  color,
  wheelDiameter
}) => (
  <div className='HeadTube' />
)

HeadTube.propTypes = {
  color: PropTypes.string.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default HeadTube
