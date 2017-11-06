import React, { Component } from 'react'
import { Navbar, Icon, Row, Col, Page } from 'clover-ui'
import styles from './index.less'

export default class IconPage extends Component {
  render() {
    const icons = [
      'up',
      'down',
      'right',
      'left',
      'wifi',

      'notice',
      'search',
      'reload',
      'document',
      'file',

      'star',
      'voice',
      'sound',
      'unsound',
      'share',

      'reply',
      'location',
      'send',
      'check',
      'wifi',
    ]
    let contentItem = []
    return (
      <Page>
        <Navbar type="secondary" >
          Icon
        </Navbar>
        {
          icons.map((item, index) => {
            if (index % 5 === 0) {
              contentItem = []
            }
            contentItem.push(<Col key={index}>
              <div className={styles.iconContainer}>
                <Icon type={item} />
              </div>
            </Col>)
            if (index % 5 === 4) {
              return (<Row key={index} className={styles.rowContainer}>
                {contentItem}
              </Row>)
            }
            return null
          })
        }
      </Page>
    )
  }
}
