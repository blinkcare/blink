import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'rebass'
import colors from './colors'

const bulge = keyframes`
  50% {
    transform: scale(1.1);
  }
`
const blink = keyframes`
  50% {
    opacity: 1;
  }
`

const Background = styled(Box)`
  background-color: ${colors.smoke};
  width: 6rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bulge} 2s ease-in-out infinite;
`

const Dot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  opacity: 0.4;
  animation: ${blink} 1s ease-in infinite ${props => props.delay}s;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
`

const Typing = props => (
  <Background {...props}>
    <Dot delay={1 / 3} />
    <Dot delay={2 / 3} />
    <Dot delay={3 / 3} />
  </Background>
)

export default Typing
