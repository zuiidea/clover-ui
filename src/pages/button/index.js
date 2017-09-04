import React, { Component } from 'react'
import components from 'components'

const { Page, Navbar } = components

export default class ButtonPage extends Component {
  render() {
    return (
      <Page>
        <Navbar>button</Navbar>
        <div>
              button page
        </div>
      </Page>
    )
  }
}
