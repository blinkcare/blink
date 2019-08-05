import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import colors from './colors'

const Card = styled(Box).attrs({
  p: 3,
  mt: 2,
  mx: [0, 2]
})`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  flex: 1 1 auto;
`

export default Card
