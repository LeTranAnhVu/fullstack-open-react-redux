import React, {useEffect} from 'react'
import Blog from './Blog'
import {fetchBlogs} from '../redux/actions/blog'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(({blogs}) => {
    const clonedBlogs = [...blogs]
    clonedBlogs.sort((blogA, blogB) => blogB.likes - blogA.likes)
    return clonedBlogs
  }) || []

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <ul>
      {blogs.map(blog => <li key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></li>)}
    </ul>
  )
}

export default BlogList