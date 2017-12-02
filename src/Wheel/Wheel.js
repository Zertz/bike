import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Spoke from '../Spoke'

import './Wheel.css'

const Wheel = ({
  front,
  back,
  color,
  diameter,
  spokes,
  speed,
  tireHeight
}) => (
  <div
    className={classnames('Wheel', {
      front,
      back
    })}
    style={{
      animationDuration: `${((1 - 20) * (speed / 100)) + 20}s`,
      borderWidth: `${tireHeight}em`,
      color,
      width: `${diameter}em`,
      height: `${diameter}em`,
    }}
  >
    {[...Array(spokes).keys()].map(i => (
      <Spoke key={i} total={spokes} index={i} />
    ))}
  </div>
)

Wheel.defaultProps = {
  front: false,
  back: false,
  tireHeight: 1
}

Wheel.propTypes = {
  front: PropTypes.bool,
  back: PropTypes.bool,
  color: PropTypes.string.isRequired,
  diameter: PropTypes.number.isRequired,
  spokes: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  tireHeight: PropTypes.number
}

export default Wheel
