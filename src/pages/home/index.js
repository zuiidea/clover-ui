import React, { Component } from 'react'
import { Navbar, ContentBlock, Page } from 'components'
import { Link } from 'react-router-dom'
import styles from './index.less'


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
          <p>
            <Link to="/list">list</Link>
          </p>
        </ContentBlock>
      </Page>
    )
  }
}
