import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SubTotalComponent } from '../../components/SubTotal'

import { useForm } from 'react-hook-form'

import { PaymentContainer } from './styles'
import { AuthContext } from '../../context/AuthContext'

const Payment = () => {
  const { register, handleSubmit, errors } = useForm()

  const { payment } = useContext(AuthContext)

  const onSubmitForm = (data) => {
    payment(data)
  }

  return (
    <PaymentContainer isError={!!errors}>
      <Header page={2} />
      <h1>Cartão de Crédito</h1>

      <form action="#">
        <div>
          <label>Número do cartão:</label>
          <input
            type="text"
            name="cardNumber"
            ref={register({ required: true })}
            placeholder="____.____.____.____"
          />
          {errors.cardNumber && <small>Card number is required.</small>}

          <label>Nome do Titular:</label>
          <input
            type="text"
            name="cardHolder"
            ref={register({ required: true })}
            placeholder="Como no cartão"
          />
          {errors.cardHolder && <small>Card holder is required.</small>}

          <div className="container-grid">
            <label>Validade (mês/ano):</label>
            <input
              type="text"
              name="cardExpiringDate"
              ref={register({ required: true })}
              placeholder="__/____"
            />
            {errors.cardExpiringDate && <small>Expiring Date is required.</small>}

            <label>CVV:</label>
            <input
              type="text"
              name="cardCvv"
              ref={register({ required: true })}
              placeholder="___"
            />
            {errors.cardCvv && <small>CVV is required.</small>}
          </div>
        </div>
      </form>

      <SubTotalComponent />

      <Link to="/success" onClick={handleSubmit(onSubmitForm)}>
        <Button>Finalizar o pedido</Button>
      </Link>
    </PaymentContainer>
  )
}

export { Payment }
