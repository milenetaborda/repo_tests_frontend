import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Payment } from './pages/Payment'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Cart} />
      <Route path="/payment" exact component={Payment} />
    </Switch>
  )
}

export default Routes
