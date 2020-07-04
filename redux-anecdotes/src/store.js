import {combineReducers, createStore} from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(
  reducers,
  composeWithDevTools()
)
export default store