import React from 'react'
import { render } from '@testing-library/react'

import Login from './login'

describe('Login Page', () => {
  test('Should not render spinned and error on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
