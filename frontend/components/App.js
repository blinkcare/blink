import React, { Component } from 'react'
import { Flex, Text } from 'rebass'
import { isEmpty } from 'lodash'
import fetch from 'unfetch'
import Header from './Header'
import Letter from './Letter'
import Currently from './Currently'
import Typing from './Typing'

const ENDPOINT = 'http://blinkpennapps.localtunnel.me'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: [],
      currently: ''
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
    fetch(ENDPOINT + '/data', head)
      .then(r => r.text())
      .then(res => {
        this.setState({ letters: res.split('') })
      })
    fetch(ENDPOINT + '/queue', head)
      .then(r => r.text())
      .then(currently => {
        this.setState({ currently })
      })
  }

  render() {
    const { letters, currently } = this.state
    return (
      <main>
        <Header />
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
