import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with the label "Favorite Number"', () => {
  const {debug} = render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  debug(input)
})

// disabling the rule for the purposes of the exercise
/*
eslint
  testing-library/no-debug: "off",
*/
