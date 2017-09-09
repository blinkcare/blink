import React from 'react'
import Head from 'next/head'
import { Container } from 'rebass'
import App from '../components/App'
import colors from '../components/colors'

export default () => (
  <Container>
    <Head>
      <title>Blink</title>
      <style>{`
        body { background-color: ${colors.bg}; }
      `}</style>
    </Head>
    <App />
  </Container>
)
