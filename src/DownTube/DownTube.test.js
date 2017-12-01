import React from 'react'
import ReactDOM from 'react-dom'
import DownTube from './DownTube'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DownTube />, div)
})
