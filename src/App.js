import React, { Component } from 'react'

import Bike from './Bike'

import './App.css'

class App extends Component {
  state = {
    acceleration: 1,
    color: '#880088',
    refreshRate: 100,
    spokes: 8,
    wheelbase: 28,
    wheelDiameter: 16
  }

  onChange = (e) => {
    const {
      name,
      type,
      value
    } = e.target

    this.setState({
      [name]: type === "number" ? Number.parseInt(value, 10) : value
    })
  }

  render () {
    const {
      acceleration,
      color,
      refreshRate,
      spokes,
      wheelbase,
      wheelDiameter
    } = this.state;

    return (
      <div className='App'>
        <form>
          <input type="text" name="color" value={color} onChange={this.onChange} />
          <input type="number" name="spokes" value={spokes} min={3} onChange={this.onChange} />
          <input type="number" name="wheelbase" value={wheelbase} onChange={this.onChange} />
          <input type="number" name="wheelDiameter" value={wheelDiameter} onChange={this.onChange} />
        </form>
        <Bike {...{
          acceleration,
          color,
          refreshRate,
          spokes,
          wheelbase,
          wheelDiameter
        }} />
      </div>
    )
  }
}

export default App
