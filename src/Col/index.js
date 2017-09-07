import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Col extends Component {
  render() {
    const { className, children, span } = this.props
    return (
      <div className={classnames('row', className, {
        [`col-${span}`]: span,
      })}
      >
        {children}
      </div>
    )
  }
}
