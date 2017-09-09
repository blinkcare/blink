import React from 'react'
import Head from 'next/head'
import { Container } from 'rebass'
import Header from '../components/Header'
import Body from '../components/Body'

export default () => (
  <main>
    <Head>
      <title>Blink</title>
      <style children="*{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.5;margin:0}" />
    </Head>
    <Container>
      <Header />
      <Body />
    </Container>
  </main>
)
