import React, { Component } from 'react'
import './index.less'

export default class ContentBlock extends Component {
  render() {
    return (
      <div>
        {this.props.title && <div className="content-block-title">
          {this.props.title}
        </div>}
        <div className="content-block">
          {this.props.children}
        </div>
      </div>
    )
  }
}
