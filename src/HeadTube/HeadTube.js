import React from 'react'
import PropTypes from 'prop-types'

import './HeadTube.css'

const HeadTube = ({
  wheelDiameter
}) => (
  <div className='HeadTube' />
)

HeadTube.propTypes = {
  wheelDiameter: PropTypes.number.isRequired
}

export default HeadTube
