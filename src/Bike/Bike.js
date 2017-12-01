import React from 'react'
import PropTypes from 'prop-types'

import Frame from '../Frame'
import Wheel from '../Wheel'

import './Bike.css'

const Bike = ({
  wheelbase,
  wheelDiameter
}) => {
  return (
    <div className='Bike' style={{ width: `${wheelbase}em`}}>
      <Wheel front diameter={wheelDiameter} />
      <Frame {...{ wheelDiameter }} />
      <Wheel back diameter={wheelDiameter} />
    </div>
  )
}

Bike.propTypes = {
  wheelbase: PropTypes.number.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default Bike
