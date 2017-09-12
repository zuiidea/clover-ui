import React, { Component } from 'react'
import classnames from 'classnames'

export default class Rate extends Component {
  render() {
    const { className, style, value = 0, small, max = 5, star = '★' } = this.props
    return (
      <span
        className={classnames('rate', className, {
          'rate-small': small,
        })}
        style={style}
      >
        { Array.from({ length: Number(max) }).map((_, index) => {
          if (index < Number(value)) {
            return <span key={index} className="active">{star}</span>
          }
          return <span key={index}>{star}</span>
        })}
      </span>
    )
  }
}
