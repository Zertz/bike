import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Spoke from '../Spoke'

import './Wheel.css'

const Wheel = ({
  front,
  back,
  diameter,
  spokes,
  tireHeight
}) => {
  const style = {
    borderWidth: `${tireHeight}em`,
    width: `${diameter}em`,
    height: `${diameter}em`,
  }

  return (
    <div className={classnames('Wheel', { front, back })} style={style}>
      {[...Array(spokes).keys()].map(i => (
        <Spoke key={i} total={spokes} index={i} />
      ))}
    </div>
  )
}

Wheel.defaultProps = {
  front: false,
  back: false,
  spokes: 9,
  tireHeight: 1
}

Wheel.propTypes = {
  front: PropTypes.bool,
  back: PropTypes.bool,
  diameter: PropTypes.number.isRequired,
  spokes: PropTypes.number,
  tireHeight: PropTypes.number
}

export default Wheel
