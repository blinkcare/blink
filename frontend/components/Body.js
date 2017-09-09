import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'
import { isEmpty } from 'lodash'
import fetch from 'unfetch'
import Letter from './Letter'
import Typing from './Typing'

const ENDPOINT = 'http://localhost:5000/data'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      letters: ['H', 'e', 'l', 'l', 'o', ' ']
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchData()
    }, 1000)
  }

  fetchData() {
    const head = {
      method: 'GET',
      mode: 'cors'
    }
    fetch(ENDPOINT, head).then(r => r.text()).then(res => {
      const { letters } = this.state
      letters.push(res.split(''))
      this.setState({ letters, typing: false })
    })
  }

  render() {
    const { letters, typing } = this.state
    return (
      <Box>
        <Flex align="center">
          {letters.map((letter, i) => (
            <Letter key={`letter-${i}`}>{letter}</Letter>
          ))}
          <Typing ml={3} />
        </Flex>
      </Box>
    )
  }
}

export default Body
