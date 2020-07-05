import React from 'react'
import {Link} from 'react-router-dom'

const UserMenuStatus = ({currentUser, handlerLogout}) => {
  if (currentUser) {
    return <p>{currentUser.name} logged in <button onClick={handlerLogout}>logout</button></p>
  } else {
    return <Link to={'/login'}>Login</Link>
  }
}

export default UserMenuStatus