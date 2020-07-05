import React from 'react'
import {useParams} from 'react-router-dom'
import Anecdote from '../components/Anecdote'

const AnecdoteDetail = ({anecdotes}) => {
  const {id} = useParams()
  const anecdote = anecdotes.find(item => item.id === id)
  return (
    <div>
      <h2>Anecdote Detail</h2>
      <Anecdote anecdote={anecdote}/>
    </div>
  )
}
export default AnecdoteDetail