import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import anecdoteService from '../service/anecdote'
import Anecdote from './Anecdote'
import {initAnecdoteAction} from '../actions/anecdote'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({anecdotes, filter}) => {
    const clonedAnecdotes = anecdotes.filter(item => {
      const re = new RegExp(filter, "i")
      return re.test(item.content)
    })
    return _.sortBy(clonedAnecdotes, 'votes').reverse()
  })

  const fetchList = async() => {
    try {
      const list = await anecdoteService.getAll()
      dispatch(initAnecdoteAction(list))
    }catch (e) {
      console.log(e.response)
    }

  }
  useEffect(() => {
    fetchList()
  },[])

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}
export default AnecdoteList