/* global document */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'pages/home'
import Button from 'pages/button'
import List from 'pages/list'
import Icon from 'pages/icon'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/button" component={Button} />
          <Route exact path="/list" component={List} />
          <Route exact path="/icon" component={Icon} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
