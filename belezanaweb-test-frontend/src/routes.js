import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Payment } from './pages/Payment'
import { Success } from './pages/Success'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Cart} />
      <Route path="/payment" exact component={Payment} />
      <Route path="/success" exact component={Success} />
    </Switch>
  )
}

export default Routes
