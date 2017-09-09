import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import colors from './colors'

const Base = styled(Text)`
  font-size: 4rem;
  flex-shrink: 0;
  color: ${colors.grey};
`

const Currently = props => <Base {...props} />

export default Currently
