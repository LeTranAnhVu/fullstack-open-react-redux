import React from 'react'
import BlogList from '../components/BlogList'
import Togglable from '../components/Togglable'
import CreateBlogForm from '../components/CreateBlogForm'

const Home = () => {
  return (
    <div>
      <BlogList/>
      <Togglable buttonLabel={'new blog'}>
        <CreateBlogForm/>
      </Togglable>
    </div>
  )
}

export default Home