// @flow

import React from 'react'
import type { Node } from 'react'
import Helmet from 'react-helmet'

type Props = {
  js: Array<string>,
  component: Node
}

const Html = (props: Props) => {
  const { js, component } = props
  const head = Helmet.renderStatic()
  const htmlAttrs = head.htmlAttributes.toComponent()

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: component }} />
        {js.map(name => (
          <script
            type="text/javascript"
            src={`/${name}`}
            key={name}
            charSet="UTF-8"
          />
        ))}
      </body>
    </html>
  )
}

export default Html
