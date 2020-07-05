import {PUSH_NOTIFICATION, REMOVE_NOTIFICATION} from '../types'

const initialState = {
  message: '',
  type: '',
  id: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_NOTIFICATION: {
      return action.payload
    }
    case REMOVE_NOTIFICATION: {
      return {...initialState}
    }
    default: {
      return state
    }
  }
}

export default notificationReducer