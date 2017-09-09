import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Box, Flex } from 'rebass'
import colors from './colors'
import fetch from 'unfetch'

const WEATHER_API = 'https://earthnetworks.azure-api.net/data/observations/v4/current?&stationid=UPAEN&providerid=3&units=english&cultureinfo=en-en&verbose=true&ruledetails=true&verbose=true&metadata=true%20&includeqcflags=true&subscription-key=45ba7fa489cc472d8282b87d1ec04f18'

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      temperature: '',
      temperatureHigh: '',
      temperatureLow: ''
    }
  }

componentDidMount() {
    this.fetchWeather()
}

fetchWeather() {
  fetch(WEATHER_API)
    .then((res) => res.json())
    .then((data) => {
      this.setState({ temperature: data.observation.temperature, temperatureHigh: data.highlow.temperatureHigh, temperatureLow: data.highlow.temperatureLow })
    })
 }

 render() {
   const { temperature, temperatureHigh, temperatureLow } = this.state
   return (
     <Box
      	p={3}
      	mx={2}
      	my={4}
      	color='white'
        bg='#207aee'>
        <Text fontSize='2rem'> Weather: University of Pennsylvania </Text>
        <Text> Current temperature: {temperature} °F </Text>
        <Text> High: {temperatureHigh} °F </Text>
        <Text> Low: {temperatureLow} °F </Text>
      </Box>
   )
 }


}

export default Weather
