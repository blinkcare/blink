import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Box, Flex, Subhead, Image } from 'rebass'
import { replace } from 'lodash'
import Card from './Card'
import colors from './colors'
import fetch from 'unfetch'

const KEY = '506005f4fd084a9682b47944f9273c18'
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&rating=g`

const Heading = styled(Subhead).attrs({
  mt: 0,
  mb: 2,
  f: 3,
  pb: 1,
  caps: true
})`
  border-bottom: 1px dotted ${colors.smoke};
`

class Giphy extends Component {
  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this.fetchData(this.props.q)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.q)
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
      <Card>
        <Heading>GIPHY</Heading>
        <Flex wrap m={-1}>
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
