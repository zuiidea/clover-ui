import React, { Component } from 'react'
import { Navbar, Page, Switch } from 'clover-ui'

export default class IconPage extends Component {
  render() {
    return (
      <Page>
        <Navbar type="secondary" >
          Switch
        </Navbar>
        <Switch />
      </Page>
    )
  }
}
