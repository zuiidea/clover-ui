import React, { Component } from 'react'
import classnames from 'classnames'

export default class Row extends Component {
  render() {
    const { className, gutter, children } = this.props
    return (
      <div className={classnames('row', className, {
        'no-gutter': gutter,
      })}
      >
        {children}
      </div>
    )
  }
}
