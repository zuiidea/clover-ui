import React, { Component } from 'react'
import classnames from 'classnames'

export default class Badge extends Component {
  render() {
    const { className, children, small, color = 'default', fill } = this.props
    return (
      <span className={classnames('badge', className, {
        'badge-small': small,
        [`badge-${color}`]: color,
        'badge-fill': fill,
      })}
      >
        {children}
      </span>
    )
  }
}
