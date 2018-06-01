// @flow

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import { Title, Paragraph } from 'components/Styled'

const Home = () => (
  <Fragment>
    <Helmet
      title="Home"
      meta={[{ name: 'description', content: 'Webpack 4 + Emotion + React' }]}
    />
    <Title>Hello world</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Paragraph>
  </Fragment>
)

export default Home
