import React, { Component } from 'react'
import classnames from 'classnames'
import { darken } from 'polished'
import Icon from '../Icon'
import { isColor } from '../_util'

export default class Button extends Component {
  render() {
    const { className, children, radius, fill,
      small, full, disabled, color = 'default', icon } = this.props

    const style = {}

    if (color && isColor(color)) {
      if (fill) {
        style.color = '#fff'
        style.borderColor = darken(0.05, color)
        style.backgroundColor = color
      } else {
        style.color = color
        style.borderColor = color
        style.backgroundColor = 'transparent'
      }
    }
    return (
      <div
        style={style}
        className={classnames('button', className, {
          [`button-${color}`]: color && !isColor(color),
          'button-disabled': disabled,
          'button-fill': fill,
          'button-small': small,
          'button-radius': radius,
          'button-full': full,
          'button-icon': icon,
        })}
      >
        {icon ? <Icon type={icon} /> : children }
      </div>
    )
  }
}
