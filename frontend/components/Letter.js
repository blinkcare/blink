import React from 'react'
import styled from 'styled-components'
import colors from './colors'

const Base = styled.span`
  color: ${colors.steel};
  font-size: 6rem;
  font-weight: 500;
`

const Letter = props => <Base {...props} />

export default Letter
