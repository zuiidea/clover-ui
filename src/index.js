import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Home from 'pages/home'
import Button from 'pages/button'
import Title from 'pages/title'

class App extends Component {
  constructor(props) {
    super(props)
  }
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
        <Route exact path='/' component={Home}/>
        <Route exact path='/button' component={Button}/>
        <Route exact path='/title' component={Title}/>
      </Switch>
    </App>
  </BrowserRouter>,
document.getElementById('root'))
