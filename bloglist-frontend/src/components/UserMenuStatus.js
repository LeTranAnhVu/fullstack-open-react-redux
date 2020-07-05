import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import LoginButton from './LoginButton'

const UserMenuStatus = ({currentUser, handlerLogout}) => {
  if (currentUser) {
    return <p>{currentUser.name} logged in
      <Button className={'ml-2'} style={{color: '#fff'}} color={'danger'} onClick={handlerLogout}>Logout</Button>
    </p>
  } else {
    return <LoginButton/>
  }
}

export default UserMenuStatus