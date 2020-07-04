import React from 'react'
import {useSelector} from 'react-redux'
import _ from 'lodash'

import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes}) => _.sortBy(anecdotes, 'votes').reverse())
  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}
export default AnecdoteList