import React from 'react'
import { Flex, Heading } from 'rebass'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const Name = styled(Heading)`
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: .15em;
  color: ${colors.grey};
`

const bulge = keyframes`
  50% {
    transform: scale(.75);
  }
`
const Badge = styled.span`
  display: inline-block;
  width: .75rem;
  height: .75rem;
  border-radius: 100%;
  background-color: ${colors.red};
  animation: ${bulge} 2s ease-in-out infinite;
`

const Header = () => (
  <Flex align="center" py={3}>
    <Badge />
    <Name m={0} ml={1}>Blink</Name>
  </Flex>
)

export default Header
