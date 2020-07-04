
const initialState = {
  message: '',
  type: ''
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_NOTIFICATION': {
      return action.payload
    }
    case 'REMOVE_NOTIFICATION': {
      return {...initialState}
    }
    default: {
      return state
    }
  }
}

export default notificationReducer