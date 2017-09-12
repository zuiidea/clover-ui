import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Item extends Component {
  render() {
    const { className, style, children, link, media, extra } = this.props
    const content = [
      media ? <div className="item-media" key="media">
        {media}
      </div> : '',
      <div className="item-inner" key="inner">
        {children}
      </div>,
      extra ? <div className="item-extra" key="extra">
        {extra}
      </div> : '',
    ]

    return (
      <li className={className} style={style}>
        {link ? <Link className="item-link item-content" to={link === true ? '#' : link}>
          {content}
        </Link> : <div className=" item-content">{content}</div>}
      </li>
    )
  }
}
