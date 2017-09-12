import React, { Component, Children, cloneElement } from 'react'
import classnames from 'classnames'
import { prefix, px2rem } from '../_util'

export default class Row extends Component {
  static defaultProps = {
    prefixCls: `${prefix}row`,
  }
  render() {
    const { className, gutter, children, prefixCls } = this.props
    const rowStyle = {}
    const colStyle = {}
    if ((Number(gutter)) > 0) {
      const width = px2rem(Number(gutter) / 2)
      rowStyle.marginLeft = `-${width}`
      rowStyle.marginRight = `-${width}`
      colStyle.paddingLeft = width
      colStyle.paddingRight = width
    }
    const cols = Children.map(children, (col: React.ReactElement<any>) => {
      if (!col) {
        return null
      }
      if (col.props) {
        return cloneElement(col, {
          style: {
            ...colStyle,
            ...col.props.style,
          },
        })
      }
      return col
    })
    return (
      <div className={classnames(prefixCls, className)} style={rowStyle}>
        {cols}
      </div>
    )
  }
}
