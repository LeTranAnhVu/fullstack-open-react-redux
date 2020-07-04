import {combineReducers, createStore} from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
  anecdotes: anecdoteReducer
})

const store = createStore(
  reducers,
  composeWithDevTools()
)
export default store