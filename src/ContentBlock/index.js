import React, { Component } from 'react'
import Title from './Title'

class ContentBlock extends Component {
  render() {
    const { className, children, title } = this.props
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
