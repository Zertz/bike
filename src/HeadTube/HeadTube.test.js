import React from 'react'
import ReactDOM from 'react-dom'
import HeadTube from './HeadTube'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeadTube />, div)
})
