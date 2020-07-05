import React, {useState, useEffect} from 'react'

const Notification = (props) => {
  const [displayNotification, setDisplayNotification] = useState('')
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    position: `fixed`,
    top: `20px`,
    right: `30px`
  }

  useEffect(() => {
    setDisplayNotification(props.notification)
    let id = setTimeout(() => {
      setDisplayNotification('')
    }, props.timeout || 5000)
    return () => {
      clearTimeout(id)
    }
  },[props])

  if(displayNotification) {
    return (
      <div style={style}>
        {displayNotification}
      </div>
    )
  }else {
    return null
  }

}
export default Notification