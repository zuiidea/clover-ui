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
          <Item link="/button" media={<Icon type="star" fill circle color="primary" />}>
            <Element type="title">
            Button
            </Element>
          </Item>
          <Item link="/list" media={<Icon type="sound" fill circle color="green" />}>
            <Element type="title">
            List
            </Element>
          </Item>
          <Item link="/icon" media={<Icon type="file" fill circle color="secondary" />}>
            <Element type="Icon">
            Icon
            </Element>
          </Item>
        </List>
      </Page>
    )
  }
}
