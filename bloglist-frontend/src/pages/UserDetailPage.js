import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addUserById} from '../redux/actions/users'
import {Badge, Container, ListGroup, ListGroupItem} from 'reactstrap'
const UserDetailPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const user = useSelector(({users}) => users.find(user => user.id === id)) || null
  if(!user) {
    dispatch(addUserById(id))
    return null
  }
  return (
    <Container>
      <h1>{user.name}</h1>
      <h4>Added blogs</h4>
      <ListGroup>
        {user.blogs && user.blogs.map(blog =>
          <ListGroupItem style={{display:"flex", justifyContent:"space-between"}} key={blog.id}>
            <Link  to={`/blogs/${blog.id}`}>{blog.title}</Link>
            <div>
              <Badge color={'danger'}  pill>{blog.likes}</Badge>
              <Badge className={'ml-2'} color={'success'}  pill>{blog.comments.length}</Badge>
            </div>
          </ListGroupItem>)
        }
      </ListGroup>
      <ul>

      </ul>
    </Container>
  )
}

export default UserDetailPage