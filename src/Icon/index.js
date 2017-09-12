import React, { Component } from 'react'
import classnames from 'classnames'
import { isColor, px2rem } from '../_util'

export default class Icon extends Component {
  render() {
    const { className, style, type, circle, img, radius, size, color = 'default', fill } = this.props
    const newStyle = {}
    if (img) {
      newStyle.backgroundImage = `url(${img})`
    }
    if (size) {
      newStyle.width = px2rem(size)
      newStyle.height = newStyle.width
    }
    if (color && isColor(color)) {
      if (fill) {
        newStyle.backgroundColor = color
        newStyle.color = '#fff'
      } else {
        newStyle.color = color
      }
    }
    return (
      <i
        className={classnames('icon', className, {
          [`icon-${color}`]: color && !isColor(color),
          [`icon-${type}`]: type,
          'icon-fill': fill,
          'icon-img': img,
          'icon-circle': circle,
          'icon-radius': radius,
        })}
        style={{
          ...newStyle,
          ...style,
        }}
      />
    )
  }
}
