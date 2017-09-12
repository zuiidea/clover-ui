import React, { Component } from 'react'
import Title from './Title'
import { prefix } from '../_util'

class ContentBlock extends Component {
  static defaultProps = {
    prefixCls: `${prefix}content-block`,
  }
  render() {
    const { className, style, children, prefixCls, title } = this.props
    return (
      <div className={className} style={style}>
        {title && <Title >{title}</Title>}
        <div className={prefixCls}>
          {children}
        </div>
      </div>
    )
  }
}

ContentBlock.Title = Title

export default ContentBlock
