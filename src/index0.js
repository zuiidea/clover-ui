/* global document */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, matchPath, Switch } from 'react-router-dom'
// import CSSTransition from 'react-transition-group/CSSTransition'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { AnimatedSwitch } from 'react-router-transition'
import 'utils/flexble'

import Home from 'pages/home'
import Button from 'pages/button'
import Title from 'pages/title'

// const routeMap = {
//   '/': Home,
//   '/button': Button,
//   '/title': Title,
// }
//
// const pathname = ''

// let RenderComponent = () => <div>404</div>
// for (const [key, value] of Object.entries(routeMap)) {
//   const match = matchPath(location.pathname, { path: key, exact: true })
//   if (match) {
//     RenderComponent = value
//     pathname = location.pathname
//     break
//   }
// }
// return (
//   <CSSTransition
//     timeout={500}
//     classNames="fade"
//     in={pathname !== location.pathname}
//   >
//     <RenderComponent />
//   </CSSTransition>
// )

//
// const App = () => (<Router>
//   <AnimatedSwitch
//     atEnter={{ opacity: 0 }}
//     atLeave={{ opacity: 0 }}
//     atActive={{ opacity: 1 }}
//     className="switch-wrapper"
//   >
//     <Route exact path="/" render={Home} />
//     <Route exact path="/button" render={Button} />
//     <Route exact path="/title" render={Title} />
//   </AnimatedSwitch>
// </Router>)

const App = () => (
  <Router>
    <Route render={({ location }) => (
      <div>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" render={Home} />
          <Route exact path="/button" render={Button} />
          <Route exact path="/title" render={Title} />
        </AnimatedSwitch>
      </div>
    )}
    />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
