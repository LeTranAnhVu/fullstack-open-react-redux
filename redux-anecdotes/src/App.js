import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import Anecdote from './components/Anecdote'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => _.sortBy(state, 'votes').reverse())
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App