import React from 'react'
import ReactDOM from 'react-dom'
import Fork from './Fork'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Fork />, div)
})
