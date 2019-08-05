import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import { isEmpty, includes, last, split } from 'lodash'
import fetch from 'isomorphic-unfetch'
import Header from './Header'
import Card from './Card'
import Readout from './Readout'
import Currently from './Currently'
import Typing from './Typing'

import Giphy from './Giphy'
import Today from './Today'
import Weather from './Weather'
import News from './News'

const ENDPOINT = 'https://blinkpennapps.localtunnel.me/'

class App extends Component {
  state = {
    characters: '',
    currently: '',
    status: false,
    app: false
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchData()
    }, 500)
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
        let app
        if (includes(characters, '/G ')) {
          app = <Giphy q={last(split(characters, '/G '))} />
        }
        this.setState({ characters, currently: queue, status, app })
      })
  }

  render() {
    const { characters, currently, status, app } = this.state
    return (
      <Box mb={4}>
        <Header status={status} />
        <Card>
          {characters && <Readout mr={2}>{characters}</Readout>}
          {currently && <Currently mr={3} children={currently} />}
          <Typing />
        </Card>
        {!isEmpty(app) && app}
        <Flex
          w={1}
          direction={['column', 'row']}
          align="flex-start"
          justify="space-between"
          wrap
        >
          <Flex column w={[1, 1 / 3]} mr={2}>
            <Today dt={new Date()} />
            <Weather />
          </Flex>
          <News />
        </Flex>
      </Box>
    )
  }
}

export default App
