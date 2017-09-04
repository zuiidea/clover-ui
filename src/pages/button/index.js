import React, { Component } from 'react'
import components from 'components'
import styles from './index.less'

const { Page, Navbar, ContentBlock, Button } = components

export default class ButtonPage extends Component {
  render() {
    return (
      <Page className={styles.page}>
        <Navbar>Button</Navbar>
        <ContentBlock title="default">
          <Button>按钮</Button>
        </ContentBlock>
        <ContentBlock title="size small">
          <Button small>按钮</Button>
          <Button small color="green">按钮</Button>
          <Button small color="orange">按钮</Button>
        </ContentBlock>
        <ContentBlock title="color">
          <Button>按钮</Button>
          <Button color="green">按钮</Button>
          <Button color="orange">按钮</Button>
        </ContentBlock>
        <ContentBlock title="fill">
          <Button fill>按钮</Button>
          <Button fill color="green">按钮</Button>
          <Button fill color="orange">按钮</Button>
        </ContentBlock>
        <ContentBlock title="radius">
          <Button radius>按钮</Button>
          <Button radius color="green">按钮</Button>
          <Button radius small>按钮</Button>
        </ContentBlock>
        <ContentBlock title="icon">
          <Button icon="up" small />
          <Button icon="down" />
          <Button icon="right" />
          <Button icon="left" />
          <Button icon="wifi" />
          <Button icon="comment" />
          <Button icon="send" />
          <Button icon="share" />
        </ContentBlock>
        <ContentBlock title="disabled">
          <Button disabled>按钮</Button>
        </ContentBlock>
        <ContentBlock title="fluid">
          <Button fluid radius className="green">按钮</Button>
          <Button fluid radius className="m-t">按钮</Button>
          <Button fluid className="m-t">按钮</Button>
        </ContentBlock>
        <ContentBlock title="row">
          <p className="buttons-row">
            <Button radius small>按钮</Button>
            <Button radius small>按钮</Button>
            <Button radius color="green" small>按钮</Button>
            <Button radius color="orange" small>按钮</Button>
          </p>
          <p className="buttons-row">
            <Button color="green">按钮</Button>
            <Button color="orange">按钮</Button>
          </p>
        </ContentBlock>
      </Page>
    )
  }
}
