// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { Title, Paragraph } from 'components/Styled'

const Home = () => (
  <Fragment>
    <Helmet
      title="Not Found"
      meta={[{ name: 'description', content: "This page doesn't exist" }]}
    />
    <Title>404 - Not Found</Title>
    <Paragraph>This page doesn't exist</Paragraph>
  </Fragment>
)

export default Home
