import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import blogReducer from './reducers/blog'
import notificationReducer from './reducers/notification'
import currentUserReducer from './reducers/currentUser'
import userReducer from './reducers/user'

const reducers = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  currentUser: currentUserReducer,
  users : userReducer
})
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store