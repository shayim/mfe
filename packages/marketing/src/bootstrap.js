import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

const mount = (appRoot) => {
  ReactDOM.render(<App />, appRoot)
}

if (process.env.NODE_ENV === 'development') {
  const appRoot = document.querySelector('#marketing-app-root')
  if (appRoot) {
    mount(appRoot)
  }
}

export { mount }
