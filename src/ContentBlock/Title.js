import React, { Component } from 'react'
import classnames from 'classnames'

export default class Title extends Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={classnames('content-block-title', className)}>
        {children}
      </div>
    )
  }
}
