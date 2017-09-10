import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import colors from './colors'

const Background = styled(Box).attrs({
  p: 3,
  my: 2,
  mx: [0, 2]
})`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  flex: 1 1 auto;
`

const Card = props => <Background {...props} />

export default Card
