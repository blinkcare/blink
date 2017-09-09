import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import colors from './colors'

const Base = styled(Text)`
  color: ${colors.black};
  font-size: 6rem;
  font-weight: 500;
`

const Readout = props => <Base {...props} />

export default Readout
