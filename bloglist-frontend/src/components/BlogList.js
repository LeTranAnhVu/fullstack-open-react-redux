import React, {useEffect} from 'react'
import Blog from './Blog'
import {fetchBlogs} from '../redux/actions/blog'
import {useDispatch, useSelector} from 'react-redux'

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
    <div>
      {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
    </div>
  )
}

export default BlogList