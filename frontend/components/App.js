import React, { Component } from 'react'
import { Flex } from 'rebass'
import { isEmpty } from 'lodash'
import fetch from 'unfetch'
import Header from './Header'
import Card from './Card'
import Readout from './Readout'
import Currently from './Currently'
import Typing from './Typing'

import Giphy from './Giphy'
import Weather from './Weather'
import News from './News'

const ENDPOINT = 'http://blinkpennapps.localtunnel.me/'
const APPS = ['gif', 'w', 'n']

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: '',
      currently: '',
      status: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchData()
    }, 800)
  }

  fetchData() {
    const head = {
      method: 'GET',
      mode: 'cors'
    }
    fetch(ENDPOINT, head)
      .then(res => res.json())
      .then(res => {
        const { characters, queue, status } = res
        this.setState({ characters, currently: queue, status })
      })
  }

  render() {
    const { characters, currently, status } = this.state
    return (
      <Flex column align="center">
        <Header status={status} />
        <Card>
          <Flex wrap align="center" w={1}>
            {characters && <Readout mr={2}>{characters}</Readout>}
            {currently && <Currently mr={3} children={currently} />}
            <Typing />
          </Flex>
        </Card>
        <Weather />
        <News />
      </Flex>
    )
  }
}

export default App
