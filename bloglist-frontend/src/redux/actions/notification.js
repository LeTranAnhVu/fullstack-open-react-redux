import {PUSH_NOTIFICATION, REMOVE_NOTIFICATION} from '../types'
import store from '../store'
export const pushNotification = (payload) => {
  const {notification:{id}} = store.getState()
  clearTimeout(id)
  return ({
    type: PUSH_NOTIFICATION,
    payload: payload
  })
}

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION,
})

export const setNotification = ({message, type}, timeout = 5000) => dispatch => {
  const id = setTimeout(() => {
    dispatch(removeNotification())
  }, timeout)
  dispatch(pushNotification({message, type, id}))
}
