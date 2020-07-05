import React from 'react'
import {connect} from 'react-redux'

const Notification = ({notification}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    position: `fixed`,
    top: `20px`,
    right: `30px`
  }
  // useEffect(() => {
  //   let id = setTimeout(() => {
  //     dispatch(removeNotification())
  //   },timeout)
  //   return () => {
  //     clearTimeout(id)
  //   }
  // },[notification])

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
const mapStateToProps = ({notification}) => ({notification})
export default connect(mapStateToProps)(Notification)