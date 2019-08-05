import React, { Component } from 'react'
import styled from 'styled-components'
import { Text, Flex, Subhead } from 'rebass'
import { slice, map } from 'lodash'
import Card from './Card'
import colors from './colors'
import fetch from 'isomorphic-unfetch'

const NEWS_API =
  'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=83781e51c30e4a3bb7cc2b0ffde70d8c'

class News extends Component {
  constructor() {
    super()
    this.state = { news: [] }
  }

  componentDidMount() {
    this.fetchNews()
  }

  fetchNews() {
    fetch(NEWS_API)
      .then(res => res.json())
      .then(data => {
        const news = slice(map(data.articles, 'title'), 0, 8)
        this.setState({ news })
      })
  }

  render() {
    const { news } = this.state
    return (
      <Card w={[1, 1 / 2]}>
        <Subhead mt={0} f={3} caps>
          News
        </Subhead>
        <Flex wrap mt={1}>
          {news.map((title, i) => (
            <Article key={`article-${i}`}>{title}</Article>
          ))}
        </Flex>
      </Card>
    )
  }
}

const Article = styled(Text)`
  display: block;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px dotted ${colors.smoke};
  width: 100%;

  &:first-child {
    border-top: 1px dotted ${colors.smoke};
  }
`

export default News
