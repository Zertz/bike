import React from 'react'
import ReactDOM from 'react-dom'
import TopTube from './TopTube'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TopTube />, div)
})
