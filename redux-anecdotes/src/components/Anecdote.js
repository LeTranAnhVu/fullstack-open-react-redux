import React from 'react'
import { useDispatch } from 'react-redux'
import {voteAction} from '../actions/anecdote'

const Anecdote = ({anecdote}) => {
  const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(voteAction(id))
  }
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}
export default Anecdote