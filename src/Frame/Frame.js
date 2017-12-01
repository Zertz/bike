import React from 'react'
import PropTypes from 'prop-types'

import TopTube from '../TopTube'
import HeadTube from '../HeadTube'
import DownTube from '../DownTube'
import SeatTube from '../SeatTube'
import SeatStay from '../SeatStay'
import ChainStay from '../ChainStay'

import './Frame.css'

const Frame = ({
  color,
  wheelDiameter
}) => (
  <div className='Frame' style={{ color, bottom: `${wheelDiameter / 2}em` }}>
    <TopTube />
    <HeadTube />
    <DownTube />
    <SeatTube style={{ height: `${(wheelDiameter / 2) + 2}em`, right: `${(wheelDiameter / 2) - 0.625}em` }} />
    <SeatStay style={{ width: `${(wheelDiameter / 2) + 3.5}em` }} />
    <ChainStay style={{ width: `${(wheelDiameter / 2) + 1.5}em` }} />
  </div>
)

Frame.defaultProps = {
  color: '#999'
}

Frame.propTypes = {
  color: PropTypes.string,
  wheelDiameter: PropTypes.number.isRequired
}

export default Frame
