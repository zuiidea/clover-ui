import React, { Component } from 'react'
import Title from './Title'
import './index.less'

class ContentBlock extends Component {
  render() {
    const { children, title, className } = this.props
    return (
      <div className={className}>
        {title && <Title >{title}</Title>}
        <div className="content-block">
          {children}
        </div>
      </div>
    )
  }
}

ContentBlock.Title = Title

export default ContentBlock
