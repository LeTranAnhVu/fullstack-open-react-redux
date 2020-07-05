import React from 'react'
import {Link} from 'react-router-dom'
import {useCurrentUser} from '../hooks'
import UserMenuStatus from './UserMenuStatus'

const Menu = () => {
  const {currentUser, handlerLogout} = useCurrentUser()
  return(
    <div>
      <Link to={`/blogs`}>Blogs</Link>
      <Link to={`/users`}>Users</Link>
      <UserMenuStatus handlerLogout={handlerLogout} currentUser={currentUser}/>
    </div>
  )
}
export default Menu