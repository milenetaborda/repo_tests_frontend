import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({ children }) => {
  return <ButtonContainer type="submit">{children}</ButtonContainer>
}

export { Button }
