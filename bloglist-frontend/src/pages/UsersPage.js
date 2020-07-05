import React from 'react'
import UserList from '../components/UserList'
import {Container} from 'reactstrap'

const UsersPage = () => {
  return (
    <Container>
      <h1>Users</h1>
      <UserList/>
    </Container>
  )
}

export default UsersPage