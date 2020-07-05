import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addUserById} from '../redux/actions/users'
const UserDetailPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const user = useSelector(({users}) => users.find(user => user.id === id)) || null
  if(!user) {
    dispatch(addUserById(id))
    return null
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h4>Added blogs</h4>
      <ul>
        {user.blogs && user.blogs.map(blog =>
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default UserDetailPage