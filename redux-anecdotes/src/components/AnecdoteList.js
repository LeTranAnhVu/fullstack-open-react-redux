import React from 'react'
import {useSelector} from 'react-redux'
import _ from 'lodash'
import deepFreeze from 'deep-freeze'

import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filter}) => {
    deepFreeze(anecdotes)
    const clonedAnecdotes = anecdotes.filter(item => {
      const re = new RegExp(filter, "i")
      return re.test(item.content)
    })
    return _.sortBy(clonedAnecdotes, 'votes').reverse()
  })
  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}
export default AnecdoteList