import React from 'react'
import {useDispatch} from 'react-redux'
import {voteAction} from '../actions/anecdote'

const Anecdote = ({anecdote}) => {
  const style = {
    border: `1px #ccc solid`,
    margin: `10px`,
    padding: `10px`
  }
  const dispatch = useDispatch()
  const vote = () => {
    dispatch(voteAction(anecdote))

  }
  return (
    <div style={style}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={vote}>vote</button>
      </div>
    </div>
  )
}
export default Anecdote