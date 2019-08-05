import React from 'react'
import { Flex, Heading } from 'rebass'
import colors from './colors'
import Icon from './Icon'

const Header = ({ status }) => (
  <Flex justify="center" align="center" pt={4} px={3} pb={2}>
    <Icon
      name="remove_red_eye"
      size={32}
      mr={2}
      fill={status ? colors.blue : colors.grey}
    />
    <Heading f={6} m={0}>
      Blink
    </Heading>
  </Flex>
)

export default Header
