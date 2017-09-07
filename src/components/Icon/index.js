import React, { Component } from 'react'
import classnames from 'classnames'
import { pxtovw } from 'utils'
import './index.less'

export default class Icon extends Component {
  render() {
    const { className, type, circle, img, radius, size, color = 'default', fill } = this.props
    const style = {}
    if (img) {
      style.backgroundImage = `url(${img})`
    }
    if (size) {
      style.width = `${pxtovw(Number(size))}vw`
      style.height = style.width
    }
    return (
      <i
        className={classnames('icon', className, {
          [`icon-${type}`]: type,
          [`icon-${size}`]: size,
          [`icon-${color}`]: color,
          'icon-fill': fill,
          'icon-img': img,
          'icon-circle': circle,
          'icon-radius': radius,
        })}
        style={style}
      />
    )
  }
}
