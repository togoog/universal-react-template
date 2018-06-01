// @flow

import React from 'react'
import styled from 'react-emotion'
import { colors } from 'styles'

import { Section } from 'components/Styled'

type Props = {
  title: string
}

const Container = styled('div')`
  background-color: ${colors.black};
  color: ${colors.white};
  height: 50px;
  margin-bottom: 2rem;
`

const StyledSection = styled(Section)`
  display: flex;
  height: 100%;
  font-size: 1.5rem;
  align-items: center;
`

const Header = ({ title }: Props) => (
  <Container>
    <StyledSection>{title}</StyledSection>
  </Container>
)

export default Header
