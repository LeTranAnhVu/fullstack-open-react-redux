import React, {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Notification from './components/Notification'
import {getUserFromLocal} from './redux/actions/currentUser'
import {useDispatch} from 'react-redux'
import Home from './pages/Home'
import UsersPage from './pages/UsersPage'
import LoginForm from './components/LoginForm'
import {useCurrentUser} from './hooks'
import UserDetailPage from './pages/UserDetailPage'
import BlogDetailPage from './pages/BlogDetailPage'
import Menu from './components/Menu'
import LoginPage from './pages/LoginPage'

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUserFromLocal())
  }, [])

  return (
    <div>
      <Notification/>
      <Menu/>
      <h2>blogs</h2>

      <Switch>
        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>

        <Route exact path={'/'}>
          <Home/>
        </Route>

        <Route exact path={'/blogs/:id'}>
          <BlogDetailPage/>
        </Route>

        <Route path={'/users/:id'}>
          <UserDetailPage/>
        </Route>
        
        <Route path={'/users'}>
          <UsersPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App