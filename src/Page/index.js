import React, { Component } from 'react'
import classnames from 'classnames'
import FlexibleView from '../FlexibleView'


export default class Page extends Component {
  render() {
    const { className, style, children, header } = this.props
    return (
      <div
        className={classnames('page', className)}
        style={style}
      >
        {header}
        <FlexibleView
          className="page-content"
        >
          {children}
        </FlexibleView>
      </div>
    )
  }
}
