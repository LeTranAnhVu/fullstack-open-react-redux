import anecdoteService from '../service/anecdote'
import {setNotification} from './notification'


export const voteAction = (anecdote) => async dispatch => {
  try {
    const updatePayload = {...anecdote, votes: anecdote.votes + 1}
    const updateAnecdote = await anecdoteService.updateById(updatePayload)
    dispatch({
      type: 'UPDATE_ANECDOTE',
      payload: updateAnecdote
    })
    dispatch(setNotification({message: `you voted ${anecdote.content}`, type: 'info'}, 3000))
  } catch (e) {
    dispatch(setNotification({message: `cannot voted ${anecdote.content}`, type: 'error'}, 3000))
  }

}

export const addAnecdoteAction = (anecdoteContent) => async dispatch => {
  try {
    const newAnec = await anecdoteService.create(anecdoteContent)
    dispatch({
      type: 'ADD_ANECDOTE',
      payload: newAnec
    })
    dispatch(setNotification({message: `you created ${anecdoteContent}`, type: 'info'}, 3000))

  } catch (e) {
    console.log(e.response)
    dispatch(setNotification({message: `cannot create ${anecdoteContent}`, type: 'error'}, 3000))
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
    dispatch(setNotification({message: 'Cannot init anecdots', type: 'error'}, 3000))
  }

}
