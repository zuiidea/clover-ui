import React, {Component} from 'react'
import styles from './index.less'

export default class Page extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
