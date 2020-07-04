import React from 'react'
import {useSelector} from 'react-redux'
import _ from 'lodash'

import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => _.sortBy(state, 'votes').reverse())
  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}
export default AnecdoteList