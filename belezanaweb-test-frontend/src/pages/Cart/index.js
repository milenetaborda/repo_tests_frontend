import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SubTotalComponent } from '../../components/SubTotal'
import api from '../../sevices/api'
import { formatPrice } from '../../utils/format'
import { Link } from 'react-router-dom'

import { CartContainer } from './styles'

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  const response = products.items?.map((item) => item.product)
  console.log(products)

  return (
    <CartContainer>
      <Header page={1} />
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

      <SubTotalComponent />

      <Link to="/payment">
        <Button>Seguir para o pagamento</Button>
      </Link>
    </CartContainer>
  )
}

export { Cart }
