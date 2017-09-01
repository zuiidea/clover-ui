import React, { Component } from 'react'
import Page from 'components/Page'
import { Link } from 'react-router-dom'

export default class ButtonPage extends Component {
    constructor (props) {
      super(props)
    }

    render () {
        return (
          <Page>
            <div>
              button page
            </div>
          </Page>
        )
    }
}
