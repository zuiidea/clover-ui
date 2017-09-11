import createHistory from 'history/createBrowserHistory'
import dva from 'dva'

const app = dva({
  history: createHistory(),
})

app.router(require('./router'))

app.start('#root')
