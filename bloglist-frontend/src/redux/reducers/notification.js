
const initialState = {
  message: '',
  type: '',
  id: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_NOTIFICATION': {
      if (state.id){
        clearTimeout(state.id)
      }
      return action.payload
    }
    case 'REMOVE_NOTIFICATION': {
      if (state.id){
        clearTimeout(state.id)
      }
      return {...initialState}
    }
    default: {
      return state
    }
  }
}

export default notificationReducer