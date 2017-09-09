import React, { Component } from 'react'
import { Flex } from 'rebass'
import { isEmpty, includes, replace } from 'lodash'
import fetch from 'unfetch'
import Header from './Header'
import Card from './Card'
import Readout from './Readout'
import Currently from './Currently'
import Typing from './Typing'

import Giphy from './Giphy'
import Weather from './Weather'
import News from './News'

const ENDPOINT = 'https://blinkpennapps.localtunnel.me/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: '',
      currently: '',
      status: false,
      app: false
    }
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
        if (includes(characters, /\/n$/)) {
          app = <News />
        } else if (includes(characters, /\/w$/)) {
          app = <Weather />
        } else if (includes(characters, /\/gif/)) {
          app = <Giphy search={replace(characters, '/gif ', '')} />
        }
        this.setState({ characters, currently: queue, status, app })
      })
  }

  render() {
    const { characters, currently, status, app } = this.state
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
        {!isEmpty(app) && app}
      </Flex>
    )
  }
}

export default App
