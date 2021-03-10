import React, { useEffect, useState } from 'react'
import api from '../../sevices/api'
import { formatPrice } from '../../utils/format'

import { ContainerCart } from './styles'

function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  const response = products.items?.map((item) => item.product)
  console.log(products)

  return (
    <ContainerCart>
      <header />
      <h1>Produtos</h1>

      <section>
        {response?.map((product) => (
          <div key={product.name}>
            <img src={product.imageObjects[0].small} alt="Imagem do produto" />
            <span>
              <p>{product.name}</p>
              <strong>{formatPrice(product.priceSpecification.price)}</strong>
            </span>
          </div>
        ))}
      </section>
    </ContainerCart>
  )
}

export { Cart }
