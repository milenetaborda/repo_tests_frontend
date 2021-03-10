import React from 'react'

import { HeaderContainer } from './styles'

function Header({ page }) {
  return (
    <HeaderContainer page={Number(page)}>
      <div>Sacola</div>
      <div>Pagamento</div>
      <div>Sacola</div>
    </HeaderContainer>
  )
}

export { Header }
