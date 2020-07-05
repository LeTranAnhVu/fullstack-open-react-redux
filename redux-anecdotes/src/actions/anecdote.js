import anecdoteService from '../service/anecdote'
import {pushNotification} from './notification'


export const voteAction = (anecdote) => async dispatch => {
  try {
    const updatePayload = {...anecdote, votes: anecdote.votes + 1}
    const updateAnecdote = await anecdoteService.updateById(updatePayload)
    dispatch({
      type: 'UPDATE_ANECDOTE',
      payload: updateAnecdote
    })
    dispatch(pushNotification({message: `you voted ${anecdote.content}`, type: 'info'}))
  } catch (e) {
    dispatch(pushNotification({message: `cannot voted ${anecdote.content}`, type: 'error'}))
  }

}

export const addAnecdoteAction = (anecdoteContent) => async dispatch => {
  try {
    const newAnec = await anecdoteService.create(anecdoteContent)
    dispatch({
      type: 'ADD_ANECDOTE',
      payload: newAnec
    })
    dispatch(pushNotification({message: `you created ${anecdoteContent}`, type: 'info'}))

  } catch (e) {
    console.log(e.response)
    dispatch(pushNotification({message: `cannot create ${anecdoteContent}`, type: 'error'}))
  }
}

export const initAnecdoteAction = () => async dispatch => {
  try {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: anecdotes
    })
  } catch (e) {
    dispatch(pushNotification({message: 'Cannot init anecdots', type: 'error'}))
  }

}
