import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    position: `fixed`,
    top: `20px`,
    right: `30px`
  }
  const notification = useSelector(({notification}) => notification)
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