import * as React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with the label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
