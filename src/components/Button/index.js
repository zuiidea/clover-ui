import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class ContentBlock extends Component {
  render() {
    const { children, radius, fill, small, fluid, disabled, color } = this.props
    return (
      <div className={classnames('button', {
        'button-disabled': disabled,
        'button-fill': fill,
        'button-small': small,
        'button-radius': radius,
        'button-fluid': fluid,
        [`button-${color}`]: color,
      })}
      >
        {children}
      </div>
    )
  }
}
