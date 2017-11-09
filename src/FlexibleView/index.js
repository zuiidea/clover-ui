import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlexibleView extends Component {
  constructor() {
    super()
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.touchStartPageY = 0
    this.state = {
      contentScaleY: 1,
      pullDirection: 'down',
      pullLoading: false,
    }
  }

  handleTouchStart(e) {
    this.touchStartPageY = e.touches[0].pageY
  }

  handleTouchMove(e) {
    const touchMovePageY = e.touches[0].pageY
    const { scrollHeight, offsetHeight, scrollTop } = this.content
    const ratio = ((touchMovePageY - this.touchStartPageY) / offsetHeight) * 0.15
    if (scrollTop === 0) {
      this.setState({
        contentScaleY: 1 + ratio,
        pullDirection: 'down',
        pullLoading: true,
      })
    } else if ((offsetHeight + scrollTop === scrollHeight)
    || (offsetHeight + scrollTop === scrollHeight - 1)) {
      this.setState({
        contentScaleY: 1 - ratio,
        pullDirection: 'up',
        pullLoading: true,
      })
    }
  }

  handleTouchEnd() {
    this.handleResetScaleY()
  }

  handleScroll() {
    const { scrollHeight, offsetHeight, scrollTop } = this.content
    if (scrollTop === 0) {
      this.setState({
        contentScaleY: 1.08,
        pullDirection: 'down',
        pullLoading: true,
      })

      setTimeout(() => {
        this.handleResetScaleY()
      }, 200)
    } else if ((offsetHeight + scrollTop === scrollHeight)
    || (offsetHeight + scrollTop === scrollHeight - 1)) {
      this.setState({
        contentScaleY: 1.08,
        pullDirection: 'up',
        pullLoading: true,
      })

      setTimeout(() => {
        this.handleResetScaleY()
      }, 200)
    }
  }

  handleResetScaleY() {
    this.setState({
      contentScaleY: 1,
      pullLoading: false,
    })
  }

  render() {
    const { className, style, children } = this.props
    const { pullDirection, contentScaleY, pullLoading } = this.state

    return (
      <div
        className={classnames('flexible-view', className)}
        ref={(c) => { this.content = c }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onScroll={this.handleScroll}
        style={{
          transform: `scaleY(${contentScaleY})`,
          transformOrigin: pullDirection === 'down' ? 'top' : 'bottom',
          transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          transitionDuration: pullLoading ? '100ms' : '300ms',
          ...style,
        }}
      >
        {children}
      </div>
    )
  }
}
