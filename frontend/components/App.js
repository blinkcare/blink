import React, { Component } from 'react'
import { Flex, Text } from 'rebass'
import { isEmpty } from 'lodash'
import fetch from 'unfetch'
import Header from './Header'
import Letter from './Letter'
import Currently from './Currently'
import Typing from './Typing'

const ENDPOINT = 'http://blinkpennapps.localtunnel.me/'
const APPS = ['gif', 'w', 'n']

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: [],
      currently: '',
      status: false
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
      .then(r => r.json())
      .then(json => {
        const letters = json.characters.split('')
        const { queue, status } = json
        this.setState({ letters, currently: queue, status })
      })
  }

  render() {
    const { letters, currently, status } = this.state
    return (
      <main>
        <Header status={status} />
        <Flex wrap align="center">
          {letters.map((letter, i) => (
            <Letter key={`letter-${i}`}>{letter}</Letter>
          ))}
          {!isEmpty(letters) && (
            <Currently ml={1} mr={3}>
              {currently}
            </Currently>
          )}
          <Typing />
        </Flex>
      </main>
    )
  }
}

export default App
