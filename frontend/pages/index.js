import React from 'react'
import Head from 'next/head'
import { Container } from 'rebass'
import App from '../components/App'
import colors from '../components/colors'

export default () => (
  <Container>
    <Head>
      <title>Blink</title>
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        background-color: ${colors.bg};
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.5;
        margin: 0;
      }
    `}</style>
    <App />
  </Container>
)
