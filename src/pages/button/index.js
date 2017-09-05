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
          <Button>Button</Button>
        </ContentBlock>
        <ContentBlock title="size small">
          <Button small>Button</Button>
          <Button small color="green">Button</Button>
          <Button small color="orange">Button</Button>
        </ContentBlock>
        <ContentBlock title="color">
          <Button>Button</Button>
          <Button color="green">Button</Button>
          <Button color="orange">Button</Button>
        </ContentBlock>
        <ContentBlock title="fill">
          <Button fill>Button</Button>
          <Button fill color="green">Button</Button>
          <Button fill color="orange">Button</Button>
        </ContentBlock>
        <ContentBlock title="radius">
          <Button radius>Button</Button>
          <Button radius color="green">Button</Button>
          <Button radius small>Button</Button>
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
          <Button disabled>Button</Button>
        </ContentBlock>
        <ContentBlock title="full">
          <Button full radius className="green">Button</Button>
          <Button full radius className="m-t">Button</Button>
          <Button full className="m-t">Button</Button>
        </ContentBlock>
        <ContentBlock title="row">
          <div className="buttons-row">
            <Button radius small>Button</Button>
            <Button radius small>Button</Button>
            <Button radius color="green" small>Button</Button>
            <Button radius color="orange" small>Button</Button>
          </div>
          <div className="buttons-row">
            <Button color="green">Button</Button>
            <Button color="orange">Button</Button>
          </div>
        </ContentBlock>
      </Page>
    )
  }
}
