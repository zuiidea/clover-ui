import React, { Component } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'

export default class Button extends Component {
  render() {
    const { className, children, radius, fill,
      small, full, disabled, color = 'default', icon } = this.props
    return (
      <div className={classnames('button', className, {
        'button-disabled': disabled,
        'button-fill': fill,
        'button-small': small,
        'button-radius': radius,
        'button-full': full,
        'button-icon': icon,
        [`button-${color}`]: color,
      })}
      >
        {icon ? <Icon type={icon} /> : children }
      </div>
    )
  }
}
