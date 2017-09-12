import React, { Component } from 'react'
import { Page, Navbar, Row, Col, ContentBlock } from 'clover-ui'
import styles from './index.less'

export default class Grid extends Component {
  render() {
    const cols = [5, 10, 15, 20, 25, 30, 33, 35, 40, 45,
      50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100]
    return (
      <Page className={styles.page}>
        <Navbar type="secondary">Grid</Navbar>
        <ContentBlock title="No gutter between Cols">
          {cols.map((item, index) => (<Row key={index}>
            <Col span={item}><div>{item}</div></Col>
          </Row>))}
          {Array.from({ length: 5 }).map((item, index) => (<Row key={index}>
            {Array.from({ length: index + 2 })
              .map((iitem, iindex) => <Col key={iindex}><div>auto</div></Col>)}
          </Row>))}
        </ContentBlock>
        <ContentBlock title="Columns with gutter">
          {Array.from({ length: 5 }).map((item, index) => (<Row key={index} gutter={16}>
            {Array.from({ length: index + 2 })
              .map((iitem, iindex) => <Col key={iindex}><div>auto</div></Col>)}
          </Row>))}
        </ContentBlock>
      </Page>
    )
  }
}
