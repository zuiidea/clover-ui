import React, { Component } from 'react'
import classnames from 'classnames'

export default class Element extends Component {
  render() {
    const { children, className, type } = this.props
    return (
      <div className={classnames(className, {
        [`item${type}`]: type,
      })}
      >
        {children}
      </div>
    )
  }
}
