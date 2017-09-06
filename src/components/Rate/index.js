import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class Rate extends Component {
  render() {
    const { className, value = 0, small, max = 5, star = '★' } = this.props
    const content = []
    return (
      <span className={classnames('rate', className, {
        'rate-small': small,
      })}
      >
        { Array.from({ length: max }).map((_, index) => {
          if (max - value) {
            return <span key={index} className="active">{star}</span>
          }
          return <span key={index}>{star}</span>
        })}
      </span>
    )
  }
}
