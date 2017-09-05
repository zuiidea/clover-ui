import React, { Component } from 'react'
import components from 'components'
import { Link } from 'react-router-dom'
import styles from './index.less'

const { Navbar, ContentBlock, Page } = components

export default class HomePage extends Component {
  render() {
    return (
      <Page className={styles.home}>
        <Navbar>home</Navbar>
        <ContentBlock>
          <p>
            <Link to="/button">button</Link>
          </p>
          <p>
            <Link to="/title">title</Link>
          </p>
        </ContentBlock>
      </Page>
    )
  }
}
