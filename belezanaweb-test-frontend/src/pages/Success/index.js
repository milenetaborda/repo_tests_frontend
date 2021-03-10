import React from 'react'
import { Header } from '../../components/Header'
import { SubTotalComponent } from '../../components/SubTotal'

import { SuccessCartContainer, SuccessPaymentContainer, SuccessContainer } from './styles'

import check from '../../assets/check.svg'

const Success = () => {
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
          <p>****.****.****.1234</p>
          <p>José da Silva</p>
          <p>05/2021</p>
        </SuccessPaymentContainer>

        <h1>Produtos</h1>

        <SuccessCartContainer>
          <section>
            <img
              src="https://lh3.googleusercontent.com/proxy/9nJ9oySucWRAP4Ji2DIw-DVnTSUM4sGqXbSEZMDRenF4Ww4QwfcCbKkpZ4Q3rgcL-4ucmWHJNFKzo6grm72gKpFiIpIF0DwBWx4tzx-muqN3"
              alt="Imagem do produto"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </section>
          <section>
            <img
              src="https://lh3.googleusercontent.com/proxy/9nJ9oySucWRAP4Ji2DIw-DVnTSUM4sGqXbSEZMDRenF4Ww4QwfcCbKkpZ4Q3rgcL-4ucmWHJNFKzo6grm72gKpFiIpIF0DwBWx4tzx-muqN3"
              alt="Imagem do produto"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </section>
        </SuccessCartContainer>

        <SubTotalComponent />
      </SuccessContainer>
    </>
  )
}

export { Success }
