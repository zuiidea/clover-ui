import React, { Component } from 'react'
import classnames from 'classnames'
import { pxtovw } from 'utils'
import './index.less'

export default class Icon extends Component {
  render() {
    const { type, circle, img, radius, size } = this.props
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
        className={classnames('icon', {
          [`icon-${type}`]: type,
          [`icon-${size}`]: size,
          'icon-img': img,
          'icon-circle': circle,
          'icon-radius': radius,
        })}
        style={style}
      />
    )
  }
}
