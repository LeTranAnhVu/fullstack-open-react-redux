import React from 'react'
import {useSelector} from 'react-redux'
import { Alert } from 'reactstrap';

const Notification = () => {
  const style = {
    position: `fixed`,
    top: `20px`,
    right: `30px`,
    zIndex: `9999`
  }
  const notification = useSelector(({notification}) => notification)
  if(notification.message) {
    return (
      <div style={style}>
        <Alert color={notification.type === 'error' ? 'danger' : notification.type}>
          {notification.message}
        </Alert>
      </div>

    )
  }else {
    return null
  }

}
export default Notification