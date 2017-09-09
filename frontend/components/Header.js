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

const Header = ({ status }) => (
  <Flex justify="center" align="center" p={3} pt={4} pb={0}>
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
