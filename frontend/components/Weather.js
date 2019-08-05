import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Box, Flex, Subhead, Small } from 'rebass'
import { round } from 'lodash'
import Card from './Card'
import Icon from './Icon'
import Typing from './Typing'
import colors from './colors'
import fetch from 'isomorphic-unfetch'

const API_KEY = 'ba95c43d421868c0b135e734fde3f264'

const Heading = styled(Box).attrs({ pb: 1 })`
  border-bottom: 1px dotted ${colors.smoke};
`

const Unit = styled.small`
  font-size: 0.66em;
  line-height: 1.2;
  vertical-align: top;
`

const Label = props => <Small f={2} color={colors.grey} ml={1} {...props} />

const icon = a => {
  const sunny = <Icon name="wb_sunny" fill="#f8b700" />
  const cloudy = <Icon name="cloud" fill={colors.grey} />
  return /cloud/.test(a) ? cloudy : sunny
}

class Weather extends Component {
  state = {
    currently: 'loading',
    forecast: {}
  }

  componentDidMount() {
    this.fetchWeather()
  }

  fetchWeather() {
    const url =
      'https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/'

    let [latitude, longitude] = [39.9493, -75.1896]

    fetch(`${url}${API_KEY}/${latitude},${longitude}`)
      .then(res => res.json())
      .then(forecast => this.setState({ forecast, currently: 'success' }))
      .catch(() => this.setState({ currently: 'error' }))
  }

  render() {
    const { currently, forecast } = this.state
    console.log(forecast)
    return currently === 'loading' ? (
      <Typing />
    ) : (
      <Card w={1} mt={0}>
        <Heading>
          <Subhead mt={0} f={3} caps>
            Weather
          </Subhead>
          <Flex align="center">
            <Icon name="pin" size={16} fill={colors.grey} />
            <Text color={colors.grey} ml={1}>
              University of Pennsylvania
            </Text>
          </Flex>
        </Heading>
        <Flex align="center" mt={2} style={{ lineHeight: '1' }}>
          {icon(forecast.currently.icon)}
          <Text f={6} mx={2}>
            {round(forecast.currently.temperature)}
            <Unit>ºF</Unit>
          </Text>
          <Box>
            <Text mb={1}>
              {round(forecast.daily.data[0].temperatureHigh)}º<Label>↑</Label>
            </Text>
            <Text>
              {round(forecast.daily.data[0].temperatureLow)}º<Label>↓</Label>
            </Text>
          </Box>
        </Flex>
      </Card>
    )
  }
}

export default Weather
