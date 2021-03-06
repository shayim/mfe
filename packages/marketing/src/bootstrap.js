import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './app'

const mount = (appRoot, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory()
  if (onNavigate) history.listen(onNavigate)

  ReactDOM.render(<App history={history} />, appRoot)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) history.push(nextPathname)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const appRoot = document.querySelector('#marketing-app-root')
  if (appRoot) {
    mount(appRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
