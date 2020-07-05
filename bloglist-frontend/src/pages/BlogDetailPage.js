import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addBlogById, likeBlog} from '../redux/actions/blog'
import Blog from '../components/Blog'
const BlogDetailPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const blog = useSelector(({blogs}) => blogs.find(blog => blog.id === id)) || null

  const handleLike = async () => {
    await dispatch(likeBlog(blog))
  }
  if(!blog) {
    dispatch(addBlogById(id))
    return null
  }
  return (
    <div>
      <h1>{blog.title}</h1>
      <Blog blog={blog}/>
    </div>
  )
}

export default BlogDetailPage