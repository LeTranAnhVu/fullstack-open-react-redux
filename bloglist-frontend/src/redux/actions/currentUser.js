import localstorage from '../../utils/localstorage'
import {LOGIN, LOGOUT, UPDATE_CURRENT_USER} from '../types'
import {setNotification} from './notification'
import {login} from '../../services/login'

export const currentUserLogin = (credentials) => async dispatch => {
  try {
    const user = await login(credentials)
    const {token, blogs,...info} = user
    if (!token) {
      throw new Error()
    }
    localstorage.saveItem('access_token', token)
    localstorage.saveItem('user', info)
    dispatch({type: LOGIN, payload: info})
    dispatch(setNotification({message: `${info.username} logged in`, type: 'success'}))
  }catch (e) {
    if (e.response && e.response.data && e.response.data.error) {
      dispatch(setNotification({message: e.response.data.error, type: 'error'}))
    }else {
      dispatch(setNotification({message: 'Cannot login', type: 'error'}))
    }
  }

}

export const getUserFromLocal = () => {
  const userEncoded = localstorage.getItem('user') || null
  return {
    type: UPDATE_CURRENT_USER,
    payload: userEncoded
  }
}

export const currentUserLogout = () => {
  localstorage.clearAll()
  return {
    type: LOGOUT
  }
}

