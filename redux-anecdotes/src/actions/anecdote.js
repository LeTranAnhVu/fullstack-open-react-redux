
export const voteAction = (anecdoteId) => ({
  type: 'VOTE',
  payload: anecdoteId
})

export const addAnecdoteAction = (anecdote) => ({
  type: 'ADD_ANECDOTE',
  payload: anecdote
})

export const initAnecdoteAction = (anecdotes) => ({
  type: 'INIT_ANECDOTE',
  payload: anecdotes
})

