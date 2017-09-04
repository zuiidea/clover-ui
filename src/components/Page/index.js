import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Page extends Component {
  render() {
    return (
      <div className={classnames('page', this.props.className)}>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
