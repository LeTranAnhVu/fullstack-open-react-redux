import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './Blog.css'
import {useDispatch} from 'react-redux'
import {likeBlog, removeBlog} from '../../redux/actions/blog'
import {useOwnBlog} from '../../hooks'
const Blog = ({blog}) => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      const {id} = blog
      setIsLoading(true)
      await dispatch(removeBlog(blog))
    }
  }

  return (
    <div className={'blog'}>
      <div className={`blog-overlay ${isLoading ? 'show' : ''}`}/>
      <p className={'title'}>{blog.title}</p>
      <button className={'show-more-btn'} onClick={() => setIsShow(!isShow)}>{isShow ? 'hide' : 'show'}</button>
      <div className={!isShow ? 'blog-detail hide' : 'blog-detail'}>
        <p>{blog.author}</p>
        <p>{blog.url}</p>
        <p>likes {blog.likes}
          <button className={'like-btn'} onClick={handleLike}>like</button>
        </p>
        {
          isOwner && <button onClick={handleRemove}>Remove</button>
        }
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog
