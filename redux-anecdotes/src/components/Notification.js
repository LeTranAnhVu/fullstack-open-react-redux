import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeNotification} from '../actions/notification'

const Notification = ({timeout = 5000}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()
  const notification = useSelector(({notification})=> ({...notification}))

  useEffect(() => {
    let id = setTimeout(() => {
      dispatch(removeNotification())
    },timeout)
    return () => {
      clearTimeout(id)
    }
  },[notification])

  if(notification.message) {
    return (
      <div style={style}>
        {notification.message}
      </div>
    )
  }else {
    return null
  }

}

export default Notification