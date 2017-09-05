import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Icon extends Component {
  render() {
    const { type } = this.props
    return (
      <i className={classnames('icon', {
        [`icon-${type}`]: type,
      })}
      />
    )
  }
}
