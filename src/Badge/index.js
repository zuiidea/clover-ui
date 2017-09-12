import React, { Component } from 'react'
import classnames from 'classnames'
import { prefix } from '../_util'

export default class Badge extends Component {
  static defaultProps = {
    prefixCls: `${prefix}badge`,
    color: 'default',
  }
  render() {
    const { className, style, children, prefixCls, small, color, fill } = this.props
    return (
      <span
        className={classnames(prefixCls, className, {
          [`${prefixCls}-small`]: small,
          [`${prefixCls}-${color}`]: color,
          [`${prefixCls}-fill`]: fill,
        })}
        style={style}
      >
        {children}
      </span>
    )
  }
}
