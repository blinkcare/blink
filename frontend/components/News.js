import React, { Component } from 'react'
import { Text, Flex, Subhead } from 'rebass'
import { map } from 'lodash'
import Card from './Card'
import colors from './colors'
import fetch from 'unfetch'

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
        const news = map(data.articles, 'title')
        this.setState({ news })
      })
  }

  render() {
    const { news } = this.state
    return (
      <Card w={2 / 3}>
        <Subhead mt={0} color={colors.slate} f={3} caps>
          News
        </Subhead>
        <Flex wrap mt={2}>
          {news.map((title, i) => (
            <Article key={`article-${i}`}>{title}</Article>
          ))}
        </Flex>
      </Card>
    )
  }
}

const Article = props => <Text mb={1} {...props} />

export default News
