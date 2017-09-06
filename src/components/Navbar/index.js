/* global window */
import React, { Component } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'
import './index.less'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleClickCenter = this.handleClickCenter.bind(this)
  }
  handleClickCenter() {
    const { type } = this.props
    if (type === 'secondary') {
      window.history.go(-1)
    }
  }
  render() {
    const { children, className, type, left, right } = this.props

    return (
      <div className={classnames('navbar', className, {
        'navbar-secondary': type === 'secondary',
      })}
      >
        <div className="navbar-inner">
          {left && <div className="left">
            {left}
          </div>}
          <div className="center" onClick={this.handleClickCenter}>
            <Icon type="left" />
            {children}
          </div>
          {right && <div className="right">
            {right}
          </div>}
        </div>
      </div>
    )
  }
}
