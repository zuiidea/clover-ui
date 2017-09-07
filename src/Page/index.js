import React, { Component } from 'react'
import classnames from 'classnames'

export default class Page extends Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={classnames('page', className)}>
        <div className="page-content">
          {children}
        </div>
      </div>
    )
  }
}
