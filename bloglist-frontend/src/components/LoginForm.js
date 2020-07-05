import React from 'react'
import {useField} from '../hooks'
import {useDispatch} from 'react-redux'
import {currentUserLogin} from '../redux/actions/currentUser'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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
    <Form onSubmit={handleLogin}>
      <FormGroup>
        <Label for="username">Email</Label>
        <Input id="username" {...usernameField} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input id="password" {...passwordField} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}
export default LoginForm
