import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'
import Anecdote from './Anecdote'
import {initAnecdoteAction} from '../actions/anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({anecdotes, filter}) => {
    const clonedAnecdotes = anecdotes.filter(item => {
      const re = new RegExp(filter, 'i')
      return re.test(item.content)
    })
    return _.sortBy(clonedAnecdotes, 'votes').reverse()
  })

  useEffect(() => {
    dispatch(initAnecdoteAction())
  }, [])

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}
export default AnecdoteList