/* global document */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/home'
import Button from 'pages/button'
import Title from 'pages/title'

import 'utils/flexble'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/title" component={Title} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'))
