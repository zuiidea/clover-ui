import React, { Component } from 'react'
import classnames from 'classnames'
import { darken } from 'polished'
import Icon from '../Icon'
import { prefix, isColor } from '../_util'

export default class Button extends Component {
  static defaultProps = {
    prefixCls: `${prefix}button`,
    color: 'default',
  }
  render() {
    const { className, style, children, prefixCls, radius, fill,
      small, full, disabled, color, icon } = this.props

    const newStyle = {}

    if (color && isColor(color)) {
      if (fill) {
        newStyle.color = '#fff'
        newStyle.borderColor = darken(0.05, color)
        newStyle.backgroundColor = color
      } else {
        newStyle.color = color
        newStyle.borderColor = color
        newStyle.backgroundColor = 'transparent'
      }
    }
    return (
      <div
        className={classnames(prefixCls, className, {
          [`${prefixCls}-${color}`]: color && !isColor(color),
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-fill`]: fill,
          [`${prefixCls}-small`]: small,
          [`${prefixCls}-radius`]: radius,
          [`${prefixCls}-full`]: full,
          [`${prefixCls}-icon`]: icon,
        })}
        style={{
          ...newStyle,
          ...style,
        }}
      >
        {icon ? <Icon type={icon} /> : children }
      </div>
    )
  }
}
