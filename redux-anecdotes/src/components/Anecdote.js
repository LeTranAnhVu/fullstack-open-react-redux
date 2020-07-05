import React from 'react'
import {connect} from 'react-redux'
import {voteAction} from '../actions/anecdote'

const Anecdote = ({anecdote, voteAction}) => {
  const style = {
    border: `1px #ccc solid`,
    margin: `10px`,
    padding: `10px`
  }
  const vote = () => {
    voteAction(anecdote)
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
const mapDispatchToProps = {voteAction}
export default connect(undefined,mapDispatchToProps)(Anecdote)