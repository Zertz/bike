import React, { Component } from 'react'

import Bike from './Bike'

import './App.css'

class App extends Component {
  state = {
    wheelbase: 28,
    wheelDiameter: 16
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: Number.parseInt(e.target.value, 10)
    })
  }

  render () {
    const {
      wheelbase,
      wheelDiameter
    } = this.state;

    return (
      <div className='App'>
        <form>
          <input type="number" name="wheelbase" value={wheelbase} onChange={this.onChange} />
          <input type="number" name="wheelDiameter" value={wheelDiameter} onChange={this.onChange} />
        </form>
        <Bike {...{
          wheelbase,
          wheelDiameter
        }} />
      </div>
    )
  }
}

export default App
