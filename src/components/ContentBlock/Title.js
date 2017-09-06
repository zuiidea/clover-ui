import React, { Component } from 'react'
import classnames from 'classnames'

export default class Title extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={classnames('content-block-title', className)}>
        {children}
      </div>
    )
  }
}
