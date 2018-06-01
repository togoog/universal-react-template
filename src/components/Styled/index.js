// @flow

import styled from 'react-emotion'
import { breakpoints } from 'styles'

export const Section = styled('div')`
  max-width: ${breakpoints.large}px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Title = styled('h1')`
  font-size: 3rem;
  text-align: ${props => props.center && 'center'};
`

export const Paragraph = styled('p')`
  font-size: 1rem;
  text-align: ${props => props.center && 'center'};
`
