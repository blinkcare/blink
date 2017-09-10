import React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import colors from './colors'

const Background = styled(Flex)`
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  width: 80px;
  height: 80px;
  border: 4px solid ${colors.red};
  border-top-width: 2px;
  border-radius: 8px;
`

const Month = styled.div`
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  line-height: 1.75;
`

const Day = styled.div`font-size: 32px;`

const Calendar = ({ month, day, ...props }) => (
  <Background {...props}>
    <Month>{month}</Month>
    <Day>{day}</Day>
  </Background>
)

export default Calendar
