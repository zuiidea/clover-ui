import React, { Component } from 'react'
import components from 'components'
import { Link } from 'react-router-dom'

const { Page, Navbar, ContentBlock } = components


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
