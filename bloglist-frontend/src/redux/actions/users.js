import {setNotification} from './notification'
import userService from '../../services/users'
import {ADD_USER, FETCH_USERS} from '../types'

export const fetchUsers = () => async dispatch => {
  try {
    const users = await userService.getAll()
    dispatch({
      type: FETCH_USERS,
      payload: users
    })
  } catch (e) {
    dispatch(setNotification({message: 'Cannot fetched users', type: 'error'}))
  }
}

export const addUserById = (id) => async dispatch => {
  try {
    const user = await userService.getById(id)
    dispatch({
      type: ADD_USER,
      payload: user
    })
  } catch (e) {
    dispatch(setNotification({message: 'Cannot fetched user', type: 'error'}))
  }
}