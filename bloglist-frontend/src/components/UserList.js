import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../redux/actions/users'
import {Link} from 'react-router-dom'

const UserList = () => {
  const users = useSelector(({users}) => users) || []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const buildList = () => {
    return users.map(user => {
        return (
          <tr>
            <td>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.blogs.length}</td>
          </tr>
        )
    })
  }
  return (
    <table>
      <thead>
      <tr>
        <th style={{minWidth: '100px'}}></th>
        <th>blogs created</th>
      </tr>
      </thead>
      <tbody>
      {buildList()}
      </tbody>
    </table>
  )
}

export default UserList