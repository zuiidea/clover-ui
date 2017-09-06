import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Badge extends Component {
  render() {
    const { children, className } = this.props
    return (
      <span className={classnames('badge', className)}>
        {children}
      </span>
    )
  }
}
