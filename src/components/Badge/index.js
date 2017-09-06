import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Badge extends Component {
  render() {
    const { children, className, small, color, fill } = this.props
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
