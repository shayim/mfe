import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import Header from './components/Header'
import Marketing from './components/marketing'

const className = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <StylesProvider generateClassName={className}>
      <BrowserRouter>
        <div>
          <Header />
          <Marketing />
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
