import React from 'react'
import PropTypes from 'prop-types'

import './DownTube.css'

const DownTube = ({
  wheelDiameter
}) => (
    <div className='DownTube' style={{ width: `${wheelDiameter + 1}em`}} />
)

DownTube.propTypes = {
  wheelDiameter: PropTypes.number.isRequired
}

export default DownTube
