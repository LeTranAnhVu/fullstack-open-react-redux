import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import App from './App'
import history from './history'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>

  , document.getElementById('root')
)