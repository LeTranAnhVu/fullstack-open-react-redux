import React, {useEffect} from 'react'
import Blog from './Blog'
import {fetchBlogs} from '../redux/actions/blog'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap'

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
    <ListGroup>
      {blogs.map(blog => <ListGroupItem style={{textAlign: 'center'}} key={blog.id}><Link
        to={`/blogs/${blog.id}`}>{blog.title}</Link></ListGroupItem>)}
    </ListGroup>
  )
}

export default BlogList