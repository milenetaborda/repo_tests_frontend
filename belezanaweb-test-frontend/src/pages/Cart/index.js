import React, { useEffect, useState } from 'react'
import api from '../../sevices/api'

import { ContainerCart } from './styles'

function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/').then((response) => {
      setProducts(response.data)
    })

    console.log(products)
  }, [products])

  return (
    <ContainerCart>
      <header />
      <h1>Produtos</h1>

      <section>
        <div>
          <img
            src="https://www.maybelline.com.br/~/media/mny/global/new%20hp%20assets/hp%20video%20carousel/iar%20concealer/iar_pack_us.png"
            alt="Imagem do produto"
          />
          <span>
            <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
            <strong>200,00</strong>
          </span>
        </div>
        <div>
          <img
            src="https://www.maybelline.com.br/~/media/mny/global/new%20hp%20assets/hp%20video%20carousel/iar%20concealer/iar_pack_us.png"
            alt="Imagem do produto"
          />
          <span>
            <p>L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium</p>
            <strong>200,00</strong>
          </span>
        </div>
      </section>
    </ContainerCart>
  )
}

export { Cart }
