import {ADD_USER, FETCH_USERS} from '../types'

const initialState = []

const userReducer = (state = initialState, {type, payload = undefined}) => {
  switch (type) {
    case FETCH_USERS : {
      return [...payload]
    }
    case ADD_USER : {
      return [...state, payload]
    }
    default: {
      return state
    }
  }
}

export default userReducer