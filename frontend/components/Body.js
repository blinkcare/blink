import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'
import Typing from './Typing'

class Body extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Box>
        <Text>Hello!</Text>
        <Typing />
      </Box>
    )
  }
}

export default Body
