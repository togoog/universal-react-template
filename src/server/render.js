import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToNodeStream, renderToStaticMarkup } from 'react-dom/server'
import { renderStylesToNodeStream } from 'emotion-server'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import App from 'containers/App'
import Html from './Html'

export default ({ clientStats }) => (req, res) => {
  const reactRouterContext = {}

  const component = renderToStaticMarkup(
    <StaticRouter location={req.url} context={reactRouterContext}>
      <App />
    </StaticRouter>
  )

  const chunkNames = flushChunkNames()
  const { scripts } = flushChunks(clientStats, {
    chunkNames
  })
  const html = renderToNodeStream(
    <Html js={scripts} component={component} />
  ).pipe(renderStylesToNodeStream())

  switch (reactRouterContext.status) {
    case 301:
    case 302:
      res.status(reactRouterContext.status)
      res.location(reactRouterContext.url)
      res.end()
      break
    case 404:
      res.status(reactRouterContext.status)
      res.type('html')
      res.write('<!doctype html>')
      html.pipe(res)
      break
    default:
      res.status(200)
      res.type('html')
      res.write('<!doctype html>')
      html.pipe(res)
  }
}
