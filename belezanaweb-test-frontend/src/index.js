import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import GlobalStyle from './styles/global'

const Strict = () => (
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))
