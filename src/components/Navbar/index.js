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
            {/* <i class="icon icon-left" v-if="type=='secondary'&&back" ></i>
            <slot></slot> */}
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
