import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Box, Flex, Subhead, Image } from 'rebass'
import { replace } from 'lodash'
import Card from './Card'
import colors from './colors'
import fetch from 'unfetch'

const KEY = '506005f4fd084a9682b47944f9273c18'
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&rating=g`

class Giphy extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this.fetchData(this.props.search)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.search)
  }

  fetchData(query) {
    const q = replace(query, /\s+/, '+')
    fetch(`${URL}&q=${q}`)
      .then(r => r.json())
      .then(res => {
        const results = res.data
        this.setState({ results })
      })
  }

  render() {
    const { results } = this.state
    return (
      <Card w={2 / 3}>
        <Subhead mt={0} mb={2} color={colors.slate} f={3} caps center>
          GIPHY
        </Subhead>
        <Flex wrap justify="center" m={-1}>
          {results.map((result, i) => (
            <Result
              src={result.images.fixed_height_small.url}
              key={`gif-${i}`}
            />
          ))}
        </Flex>
      </Card>
    )
  }
}

const Result = ({ src, ...props }) => (
  <Image src={src} m={1} style={{ height: 100 }} {...props} />
)

export default Giphy
