import React, { Component } from 'react'
import './index.less'

export default class Page extends Component {
  render() {
    return (
      <div className="page">
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
