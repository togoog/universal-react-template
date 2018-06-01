// @flow

import React, { Fragment } from 'react'
import { injectGlobal } from 'emotion'
import { withRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from 'containers/Home'
import NotFound from 'containers/NotFound'

import Header from 'components/Header'
import { Section } from 'components/Styled'

import config from './config'

// this makes eslint happy
injectGlobal([
  `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
])

const App = () => (
  <Fragment>
    <Helmet {...config.head} />
    <Header title="Universal React Template" />
    <Section>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </Section>
  </Fragment>
)

export default withRouter(App)
