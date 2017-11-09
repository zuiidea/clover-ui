import React from 'react'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import 'clover-ui/theme/styles.less'
import App from './app'

const { ConnectedRouter } = routerRedux

const Router = function ({ history, app }) {
  const routes = [
    {
      path: '/home',
      component: () => import('./home'),
    },
    {
      path: '/button',
      component: () => import('./button'),
    },
    {
      path: '/list',
      component: () => import('./list'),
    },
    {
      path: '/icon',
      component: () => import('./icon'),
    },
    {
      path: '/grid',
      component: () => import('./grid'),
    },
    {
      path: '/switch',
      component: () => import('./switch'),
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default Router
