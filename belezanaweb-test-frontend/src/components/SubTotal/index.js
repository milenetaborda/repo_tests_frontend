import React, { useEffect, useState } from 'react'
import api from '../../sevices/api'
import { formatPrice } from '../../utils/format'

import { SubTotalContainer } from './styles'

function SubTotalComponent() {
  const [price, setPrice] = useState(0)

  useEffect(() => {
    api.get('/products').then((response) => {
      setPrice(response.data)
    })
  }, [])

  return (
    <SubTotalContainer>
      <div>
        <p>Produtos</p>
        <span>{formatPrice(price.subTotal)}</span>
      </div>
      <div>
        <p>Frete</p>
        <span>{formatPrice(price.shippingTotal)}</span>
      </div>
      <div>
        <p>Desconto</p>
        <span>- {formatPrice(price.discount)}</span>
      </div>
      <div>
        <p>Total</p>
        <span>{formatPrice(price.total)}</span>
      </div>
    </SubTotalContainer>
  )
}

export { SubTotalComponent }
