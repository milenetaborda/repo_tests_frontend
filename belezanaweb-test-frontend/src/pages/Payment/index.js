import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SubTotalComponent } from '../../components/SubTotal'

import { PaymentContainer } from './styles'

const Payment = () => {
  return (
    <PaymentContainer>
      <Header page={2} />
      <h1>Cartão de Crédito</h1>

      <form action="#">
        <label htmlFor="">Número do cartão:</label>
        <input type="text" name="" placeholder="____.____.____.____" />

        <label htmlFor="">Nome do Titular:</label>
        <input type="number" name="" placeholder="Como no cartão" />

        <div>
          <label htmlFor="">Validade (mês/ano):</label>
          <input type="text" name="" placeholder="__/____" />

          <label htmlFor="">CVV:</label>
          <input type="text" name="" placeholder="___" />
        </div>
      </form>

      <SubTotalComponent />

      <Link to="/success">
        <Button>Finalizar o pedido</Button>
      </Link>
    </PaymentContainer>
  )
}

export { Payment }
