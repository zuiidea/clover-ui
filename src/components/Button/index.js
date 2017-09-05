import React, { Component } from 'react'
import classnames from 'classnames'
import Icon from 'components/Icon'
import './index.less'

export default class Button extends Component {
  render() {
    const { children, radius, fill, small, full, disabled, color, icon } = this.props
    return (
      <div className={classnames('button', {
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
