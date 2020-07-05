import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../redux/actions/users'
import {Link} from 'react-router-dom'
import {Table} from 'reactstrap'

const UserList = () => {
  const users = useSelector(({users}) => users) || []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const buildList = () => {
    return users.map((user,index) => {
        return (
          <tr key={user.id}>
            <td>{index+1}</td>
            <td>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.blogs.length}</td>
          </tr>
        )
    })
  }
  return (
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Blogs created</th>
        </tr>
        </thead>
        <tbody>
        {buildList()}
        </tbody>
      </Table>
  )
}

export default UserList