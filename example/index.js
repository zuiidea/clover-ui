/* global document */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import Button from './button'
import List from './list'
import Icon from './icon'

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
