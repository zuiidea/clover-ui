import React, { Component } from 'react'
import components from 'components'
import { Link } from 'react-router-dom'
import styles from './index.less'

const { Page } = components

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Page className="666">
          <p>
            <Link to="/button">button</Link>
          </p>
          <p>
            <Link to="/title">title</Link>
          </p>
        </Page>
      </div>
    )
  }
}
