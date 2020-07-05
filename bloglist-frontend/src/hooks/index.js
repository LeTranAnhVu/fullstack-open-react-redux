import {useEffect, useState} from 'react'
import localstorage from '../utils/localstorage'
import {useDispatch, useSelector} from 'react-redux'
import {currentUserLogout, getUserFromLocal} from '../redux/actions/currentUser'


export const useCurrentUser = () => {
  const currentUser = useSelector(({currentUser}) => currentUser)
  const dispatch = useDispatch()

  const handlerLogout = () => {
    dispatch(currentUserLogout())
  }
  return {currentUser , handlerLogout}
}

export const useOwnBlog = (blog) => {
  const [isOwner, setIsOwner] = useState(false)
  const {currentUser} = useCurrentUser()
  useEffect(() => {
    const blogCreatorId = blog.user
    if (blogCreatorId && currentUser) {
      setIsOwner(currentUser.id === blogCreatorId)
    }
  }, [blog, currentUser])
  return isOwner
}

export const useField = (name, type = 'text') => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const reset = () => {
    setValue('')
  }
  return {
    name,
    type,
    value,
    onChange,
    reset
  }
}