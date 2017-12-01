import React from 'react'
import PropTypes from 'prop-types'

import './DownTube.css'

const DownTube = ({
  color,
  wheelDiameter
}) => (
    <div className='DownTube' />
)

DownTube.propTypes = {
  color: PropTypes.string.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default DownTube
