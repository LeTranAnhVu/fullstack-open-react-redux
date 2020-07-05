import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {likeBlog, removeBlog} from '../redux/actions/blog'
import {useOwnBlog} from '../hooks'
import LeaveBLogComment from './LeaveBlogComment'
import {Button, Col, ListGroup, ListGroupItem, Row} from 'reactstrap'

const Blog = ({blog}) => {
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch()
  const isOwner = useOwnBlog(blog)

  const handleLike = async () => {
    setIsLoading(true)
    await dispatch(likeBlog(blog))
    setIsLoading(false)
  }
  const handleRemove = async () => {
    const answer = window.confirm(`Delete blog ${blog.title} by ${blog.author}?`)
    if (answer) {
      setIsLoading(true)
      await dispatch(removeBlog(blog))
      history.push('/')
    }
  }

  return (
    <div className={'blog'}>
      <div className={`blog-overlay ${isLoading ? 'show' : ''}`}/>
      <div>
        <p>by {blog.author}</p>
        <p>{blog.url}</p>
        <p><span>likes {blog.likes}</span>
          <Button className={'ml-2'} color="primary" size="sm" onClick={handleLike}>like</Button>
        </p>
        {
          isOwner && <Button outline color={'danger'} onClick={handleRemove}>Remove</Button>
        }
        <hr/>
        <h4>Comments</h4>
        <Row>
          <Col md={6}>
            <LeaveBLogComment blog={blog}/>
          </Col>
        </Row>
        <ListGroup className={'mt-3'}>
          {blog.comments.reverse().map((cmt, index) => <ListGroupItem key={index}>{cmt}</ListGroupItem>)}
        </ListGroup>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog
