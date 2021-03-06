import React from 'react'

import { Router, Switch, Route } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const className = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={className}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
