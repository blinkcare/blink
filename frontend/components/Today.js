import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Box, Flex, Subhead } from 'rebass'
import Card from './Card'
import Calendar from './Calendar'
import colors from './colors'

const Heading = styled(Subhead).attrs({ mt: 0, f: 3, pb: 1, caps: true })`
  border-bottom: 1px dotted ${colors.smoke};
`

const Today = ({ dt }) => (
  <Card w={1} mb={2}>
    <Heading>Today</Heading>
    <Flex align="center" mt={2}>
      <Calendar month="Sept" day={dt.getDate()} />
      <Text f={6} ml={24}>
        {dt.getHours()}:{("0" + dt.getMinutes()).slice(-2)}
      </Text>
      <Box />
    </Flex>
  </Card>
)

export default Today
