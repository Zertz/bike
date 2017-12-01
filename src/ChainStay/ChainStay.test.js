import React from 'react'
import ReactDOM from 'react-dom'
import ChainStay from './ChainStay'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChainStay />, div)
})
