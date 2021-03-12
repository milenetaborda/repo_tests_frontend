import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { SubTotalComponent } from '../../components/SubTotal'

import { SuccessCartContainer, SuccessPaymentContainer, SuccessContainer } from './styles'

import check from '../../assets/check.svg'
import { AuthContext } from '../../context/AuthContext'

const Success = () => {
  const { user, products } = useContext(AuthContext)

  const response = products?.items?.map((item) => item.product)
  const ArrCardNumber = user?.cardNumber.split('.')

  return (
    <>
      <Header page={3} />
      <SuccessContainer>
        <span>
          <img src={check} alt="Imagem confirmação de compra" />
          <p>Compra efetuada com sucesso</p>
        </span>

        <h1>Pagamento</h1>
        <SuccessPaymentContainer>
          <p>****.****.****.{ArrCardNumber[3]}</p>
          <p>{user?.cardHolder}</p>
          <p>{user?.cardExpiringDate}</p>
        </SuccessPaymentContainer>

        <h1>Produtos</h1>

        <SuccessCartContainer>
          <section>
            {response?.map((product) => (
              <div key={product.sku}>
                <img src={product.imageObjects[0].small} alt="Imagem do produto" />
                <p>{product.name}</p>
              </div>
            ))}
          </section>
        </SuccessCartContainer>

        <SubTotalComponent />
      </SuccessContainer>
    </>
  )
}

export { Success }
