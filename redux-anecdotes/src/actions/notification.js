
export const pushNotification = ({message, type}) => ({
  type: 'PUSH_NOTIFICATION',
  payload: {message, type}
})


export const removeNotification = () => ({
  type: 'REMOVE_NOTIFICATION',
})
