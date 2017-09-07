import React, { Component } from 'react'
import { ContentBlock, List, Icon, Page } from 'components'
import styles from './index.less'

const Title = ContentBlock.Title
const { Element, Item } = List

export default class HomePage extends Component {
  render() {
    return (
      <Page className={styles.home}>
        <Title>Basic</Title>
        <List>
          <Item link="/button" media={<Icon type="star" fill="cyan" />}>
            <Element type="title">
            Button
            </Element>
          </Item>
          <Item link="/list" media={<Icon type="file" fill="yellow" />}>
            <Element type="title">
            List
            </Element>
          </Item>
        </List>
      </Page>
    )
  }
}
