import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {likeBlog, removeBlog} from '../redux/actions/blog'
import {useOwnBlog} from '../hooks'
import LeaveBLogComment from './LeaveBlogComment'

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
        <p>likes {blog.likes}
          <button className={'like-btn'} onClick={handleLike}>like</button>
        </p>
        {
          isOwner && <button onClick={handleRemove}>Remove</button>
        }
        <h4>Comments</h4>
        <LeaveBLogComment blog={blog}/>
        <ul>
          {blog.comments.reverse().map((cmt, index) => <li key={index}>{cmt}</li>)}
        </ul>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog
