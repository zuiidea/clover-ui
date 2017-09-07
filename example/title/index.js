import React, { Component } from 'react'
import { Page, Navbar, ContentBlock } from 'clover-ui'
import { Link } from 'react-router-dom'

export default class TitlePage extends Component {
  render() {
    return (
      <Page>
        <Navbar>TitlePage</Navbar>
        <ContentBlock>
          <p>
            <Link to="/button">button</Link>
          </p>
          <p>
            <Link to="/title">title</Link>
          </p>
        </ContentBlock>
      </Page>
    )
  }
}
