import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

const LoginButton = ({children}) => {
  return <Button style={{color: '#fff'}} color={'primary'} tag={Link} to={'/login'}>{children || 'Login' }</Button>
}

export default LoginButton