import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Fork from '../Fork'
import Frame from '../Frame'
import Wheel from '../Wheel'

import './Bike.css'

class Bike extends Component {
  constructor(props) {
    super(props)

    this.state = {
      speed: 0
    }

    this.accelerate = this.accelerate.bind(this);
    this.decelerate = this.decelerate.bind(this);
  }

  componentDidMount() {
    const {
      refreshRate
    } = this.props

    this.accelerationIntervalId = window.setInterval(this.accelerate, refreshRate)
  }

  accelerate() {
    const {
      acceleration,
      refreshRate
    } = this.props

    const {
      speed
    } = this.state

    if (speed >= 99) {
      clearInterval(this.accelerationIntervalId)

      window.setTimeout(() => {
        this.decelerationIntervalId = window.setInterval(this.decelerate, refreshRate)
      }, 10000)
    }

    this.setState({
      speed: speed + acceleration
    })
  }

  decelerate() {
    const {
      acceleration
    } = this.props

    const {
      speed
    } = this.state

    if (speed <= 1) {
      clearInterval(this.decelerationIntervalId)
    }

    this.setState({
      speed: speed - acceleration
    })
  }

  render() {
    const {
      color,
      spokes,
      wheelbase,
      wheelDiameter
    } = this.props

    const {
      speed
    } = this.state

    return (
      <div className='Bike' style={{ width: `${wheelbase}em`}}>
        <Wheel
          front
          diameter={wheelDiameter}
          {...{ color, speed, spokes }}
        />
        <Fork {...{ color, wheelDiameter }} />
        <Frame {...{ color, speed, wheelDiameter }} />
        <Wheel
          back
          diameter={wheelDiameter}
          {...{ color, speed, spokes }}
        />
      </div>
    );
  }
}

Bike.propTypes = {
  acceleration: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  refreshRate: PropTypes.number.isRequired,
  spokes: PropTypes.number.isRequired,
  wheelbase: PropTypes.number.isRequired,
  wheelDiameter: PropTypes.number.isRequired
}

export default Bike
