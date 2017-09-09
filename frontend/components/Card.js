import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import colors from './colors'

const Background = styled(Box).attrs({
  p: 3,
  my: 3,
  w: 1
})`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
`

const Card = props => <Background {...props} />

export default Card
