import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'
import Letter from './Letter'
import Typing from './Typing'

class Body extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Box>
        <Flex align="center">
          <Letter>H</Letter>
          <Letter>e</Letter>
          <Letter>l</Letter>
          <Letter>l</Letter>
          <Letter>o</Letter>
          <Typing ml={3} />
        </Flex>
      </Box>
    )
  }
}

export default Body
