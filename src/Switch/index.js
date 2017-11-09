import React, { Component } from 'react'
import classnames from 'classnames'
import { prefix } from '../_util'

export default class Switch extends Component {
  static defaultProps = {
    prefixCls: `${prefix}switch`,
  }
  render() {
    const { className, prefixCls } = this.props

    return (
      <label className={classnames(prefixCls, className)} >
        <input type="checkbox" />
        <div className={`${prefixCls}-checkbox`} />
      </label>
    )
  }
}
