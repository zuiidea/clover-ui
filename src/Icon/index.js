import React, { Component } from 'react'
import classnames from 'classnames'
import { isColor, px2rem } from '../_util'

export default class Icon extends Component {
  render() {
    const { className, type, circle, img, radius, size, color = 'default', fill } = this.props
    const style = {}
    if (img) {
      style.backgroundImage = `url(${img})`
    }
    if (size) {
      style.width = px2rem(size)
      style.height = style.width
    }
    if (color && isColor(color)) {
      if (fill) {
        style.backgroundColor = color
        style.color = '#fff'
      } else {
        style.color = color
      }
    }
    return (
      <i
        style={style}
        className={classnames('icon', className, {
          [`icon-${color}`]: color && !isColor(color),
          [`icon-${type}`]: type,
          'icon-fill': fill,
          'icon-img': img,
          'icon-circle': circle,
          'icon-radius': radius,
        })}
      />
    )
  }
}
