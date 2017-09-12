import React, { Component } from 'react'
import classnames from 'classnames'
import { prefix } from '../_util'

export default class Title extends Component {
  static defaultProps = {
    prefixCls: `${prefix}content-block-title`,
  }
  render() {
    const { className, style, children, prefixCls } = this.props
    return (
      <div className={classnames(prefixCls, className)} style={style}>
        {children}
      </div>
    )
  }
}
