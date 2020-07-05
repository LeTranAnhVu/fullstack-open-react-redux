import React from 'react'
import {useField} from '../hooks'
import {useDispatch} from 'react-redux'
import {currentUserLogin} from '../redux/actions/currentUser'
import {useHistory} from 'react-router-dom'

const LoginForm = () => {
  const {reset: resetUsername, ...usernameField}= useField('username')
  const {reset: resetPassword, ...passwordField}= useField('username', 'password')
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    const {value: username} = usernameField
    const {value: password} = passwordField
    await dispatch(currentUserLogin({username, password}))
  }
  return (
    <form onSubmit={handleLogin}>
      <div>username
        <input {...usernameField}/>
      </div>
      <div>password
        <input {...passwordField}/>
      </div>
      <button type="submit">login</button>
    </form>
  )
}
export default LoginForm
