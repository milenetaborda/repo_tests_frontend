import React from 'react'
import Payment from '../../pages/Payment'
import { render } from '@testing-library/react'

describe('Payment Page', () => {
  test('', () => {
    const { debug } = render(<Payment />)

    debug()
  })
})
