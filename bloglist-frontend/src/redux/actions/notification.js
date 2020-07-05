
export const pushNotification = ({message, type, id}) => ({
  type: 'PUSH_NOTIFICATION',
  payload: {message, type, id}
})


export const removeNotification = () => ({
  type: 'REMOVE_NOTIFICATION',
})

export const setNotification = ({message, type}, timeout = 5000) => dispatch => {
  const id = setTimeout(() => {
    dispatch(removeNotification())
  }, timeout)
  dispatch(pushNotification({message, type, id}))
}
