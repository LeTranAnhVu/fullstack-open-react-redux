import React from 'react'
import PropTypes from 'prop-types'
import {useField} from '../hooks'
import {useDispatch} from 'react-redux'
import {currentUserLogin} from '../redux/actions/currentUser'

const LoginForm = () => {
  const {reset: resetUsername, ...usernameField}= useField('username')
  const {reset: resetPassword, ...passwordField}= useField('username', 'password')
  const resetForm = () => {
    resetUsername()
    resetPassword()
  }
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    const {value: username} = usernameField
    const {value: password} = passwordField
    await dispatch(currentUserLogin({username, password}))
    resetForm()
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
