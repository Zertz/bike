import React from 'react'
import PropTypes from 'prop-types'

import TopTube from '../TopTube'
import HeadTube from '../HeadTube'
import DownTube from '../DownTube'
import SeatTube from '../SeatTube'
import SeatStay from '../SeatStay'
import ChainStay from '../ChainStay'

import './Frame.css'

const Frame = (props) => (
  <div
    className='Frame'
    style={{
      color: props.color,
      height: `${(props.wheelDiameter / 2) + (props.wheelDiameter * 0.125)}em`,
      bottom: `${props.wheelDiameter / 2}em`
    }}
  >
    <TopTube {...props} />
    <HeadTube {...props} />
    <DownTube {...props} />
    <SeatTube {...props} />
    <SeatStay {...props} />
    <ChainStay {...props} />
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
