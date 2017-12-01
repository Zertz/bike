import React from 'react'
import PropTypes from 'prop-types'

import './TopTube.css'

const TopTube = ({
  color,
}) => (
  <div className='TopTube' style={{ color }} />
)

TopTube.defaultProps = {
  color: '#999'
}

TopTube.propTypes = {
  color: PropTypes.string,
}

export default TopTube
