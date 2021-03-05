import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Marketing from './components/marketing'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Marketing />
      </div>
    </BrowserRouter>
  )
}
