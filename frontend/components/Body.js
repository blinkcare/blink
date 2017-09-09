import React, { Component } from 'react'
import { Box, Flex, Text } from 'rebass'
import { isEmpty } from 'lodash'
import fetch from 'unfetch'
import Letter from './Letter'
import Typing from './Typing'

const ENDPOINT = ''

class Body extends Component {
  constructor() {
    super()
    this.state = {
      letters: ['H', 'e', 'l', 'l', 'o', ' '],
      typing: true
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
    fetch(ENDPOINT, head)
      .then(res => {
        return res.json()
      })
      .then(json => {
        if (isEmpty(json.new)) {
          this.setState({ typing: true })
        } else {
          const { letters } = this.state
          letters.push(json.new)
          this.setState({ letters, typing: false })
        }
      })
  }

  render() {
    const { letters, typing } = this.state
    return (
      <Box>
        <Flex align="center">
          {letters.map(letter => <Letter>{letter}</Letter>)}
          {typing && <Typing ml={3} />}
        </Flex>
      </Box>
    )
  }
}

export default Body
