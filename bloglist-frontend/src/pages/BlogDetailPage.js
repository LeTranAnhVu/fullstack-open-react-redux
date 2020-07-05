import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addBlogById, likeBlog} from '../redux/actions/blog'
import Blog from '../components/Blog'
import {Container} from 'reactstrap'
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
    <Container>
      <h1>{blog.title}</h1>
      <Blog blog={blog}/>
    </Container>
  )
}

export default BlogDetailPage