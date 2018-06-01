import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import App from 'containers/App'

const supportsHistory = 'pushState' in window.history

const renderApp = TheApp =>
  hydrate(
    <AppContainer warnings={false}>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <TheApp />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  )

if (module.hot) {
  module.hot.accept('./containers/App/index.js', () => {
    const theApp = require('./containers/App').default
    renderApp(theApp)
  })
}

renderApp(App)
