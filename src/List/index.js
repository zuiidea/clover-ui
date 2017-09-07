import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'
import Item from './Item'
import Element from './Element'

class List extends Component {
  render() {
    const { className, children, media } = this.props
    return (
      <div className={classnames('list-block', className,
        { 'media-list': media },
      )}
      >
        <ul>
          {children}
        </ul>
      </div>
    )
  }
}

List.Item = Item
List.Element = Element

export default List
