import React, { Component } from 'react'
import classnames from 'classnames'

export default class Page extends Component {
  render() {
    const { className, style, children } = this.props
    return (
      <div
        className={classnames('page', className)}
        style={style}
      >
        <div className="page-content">
          {children}
        </div>
      </div>
    )
  }
}
