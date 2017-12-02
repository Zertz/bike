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
  ...rest
}) => (
  <div
    className='Frame'
    style={{
      color,
      height: `${(rest.wheelDiameter / 2) + (rest.wheelDiameter * 0.125)}em`,
      bottom: `${rest.wheelDiameter / 2}em`
    }}
  >
    <TopTube {...rest} />
    <HeadTube {...rest} />
    <DownTube {...rest} />
    <SeatTube {...rest} />
    <SeatStay {...rest} />
    <ChainStay {...rest} />
  </div>
)

Frame.propTypes = {
  color: PropTypes.string.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default Frame
