import React, {useEffect} from 'react'
import LoginForm from './components/LoginForm'

import './App.css'
import CreateBlogForm from './components/CreateBlogForm'
import Togglable from './components/Togglable'
import BlogList from './components/BlogList'
import Notification from './components/Notification'
import {useCurrentUser} from './hooks'
import {getUserFromLocal} from './redux/actions/currentUser'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const {currentUser, handlerLogout} = useCurrentUser()

  useEffect(() => {
    dispatch(getUserFromLocal())
  }, [])

  const afterLogin = () => (
    <>
      <h2>{currentUser.name} logged in <button onClick={handlerLogout}>logout</button></h2>
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
        !currentUser ?
          <LoginForm/>
          :
          afterLogin()
      }
      <BlogList/>
    </div>
  )
}

export default App