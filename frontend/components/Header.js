import React from 'react'
import { Flex, Heading } from 'rebass'
import styled, { keyframes } from 'styled-components'
import colors from './colors'
import Icon from './Icon'

const Name = styled(Heading)`
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${colors.grey};
`

const bulge = keyframes`
  50% {
    transform: scale(.75);
  }
`
const Badge = styled.span`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;
  background-color: ${props => (props.status ? colors.red : colors.grey)};
  animation: ${bulge} 2s ease-in-out infinite;
`

const Header = ({ status }) => (
  <Flex align="center" p={3} pt={4} pb={0}>
    <Icon
      name="remove_red_eye"
      size={16}
      fill={status ? colors.blue : colors.grey}
    />
    <Name m={0} ml={1}>
      Blink
    </Name>
  </Flex>
)

export default Header
