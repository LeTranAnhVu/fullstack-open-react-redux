import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
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
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>
        <Route exact path={'/'}>
          <Redirect to={'/blogs'}/>
        </Route>

        <Route exact path={'/blogs/:id'}>
          <BlogDetailPage/>
        </Route>

        <Route exact path={'/blogs'}>
          <Home/>
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