import React, { Component } from 'react'
import './index.less'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            <slot name="left" />
          </div>
          <div className="center">
            {this.props.children}
          </div>
          <div className="right">
            <slot name="right" />
          </div>
        </div>
      </div>
    )
  }
}
