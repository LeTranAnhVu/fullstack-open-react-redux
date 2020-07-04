import {asObject} from '../utils/anecdoteUtils'

export const voteAction = (anecdoteId) => ({
  type: 'VOTE',
  payload: anecdoteId
})

export const addAnecdoteAction = (anecdote) => ({
  type: 'ADD_ANECDOTE',
  payload: asObject(anecdote)
})