import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'

import localstorage from './utils/localstorage'

import './App.css'
import CreateBlogForm from './components/CreateBlogForm'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import Notification from './components/Notification'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // check token
    const userEncoded = localstorage.getItem('user')
    if (userEncoded) {
      setUser(userEncoded)
    }
  }, [])

  const handleLoginSuccess = (user) => {
    setUser(user)
  }

  const handlerLogout = () => {
    localstorage.clearAll()
    setUser(null)
  }

  const afterLogin = () => (
    <>
      <h2>{user.name} logged in <button onClick={handlerLogout}>logout</button></h2>
      <Togglable buttonLabel={'new blog'}>
        <CreateBlogForm/>
      </Togglable>
    </>
  )
  return (
    <div>
      <Notification/>
      <h2>blogs</h2>
      {
        !user ?
          <LoginForm onLoginSuccess={handleLoginSuccess}/>
          :
          afterLogin()
      }
      <BlogList/>
    </div>
  )
}

export default App