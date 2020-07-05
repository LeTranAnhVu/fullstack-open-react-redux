import {LOGIN, LOGOUT, UPDATE_CURRENT_USER} from '../types'

const initialState = null

const currentUserReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN: {
      return payload
    }
    case LOGOUT: {
      return initialState
    }
    case UPDATE_CURRENT_USER: {
      return payload
    }
    default: {
      return state
    }
  }
}

export default currentUserReducer