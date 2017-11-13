import React, { Component } from 'react'
import classnames from 'classnames'
import FlexibleView from '../FlexibleView'


export default class Page extends Component {
  constructor() {
    super()
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    console.log(e)
  }

  render() {
    const { className, style, children, header, flexible = true } = this.props
    return (
      <div
        className={classnames('page', className)}
        style={style}
      >
        {header}
        <FlexibleView
          className="page-content"
          disabled={!flexible}
          onScroll={this.handleScroll}
        >
          {children}
        </FlexibleView>
      </div>
    )
  }
}
