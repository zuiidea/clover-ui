import React, { Component } from 'react'
import classnames from 'classnames'
import { prefix } from '../_util'

export default class Col extends Component {
  static defaultProps = {
    prefixCls: `${prefix}col`,
    span: 'auto',
  }
  render() {
    const { className, style, children, prefixCls, span } = this.props
    return (
      <div
        style={style}
        className={classnames(className, {
          [`${prefixCls}-${span}`]: span,
        })}
      >
        {children}
      </div>
    )
  }
}
