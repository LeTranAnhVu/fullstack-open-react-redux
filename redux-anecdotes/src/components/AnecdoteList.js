import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import _ from 'lodash'
import Anecdote from './Anecdote'
import {initAnecdoteAction} from '../actions/anecdote'

const AnecdoteList = ({anecdotes, initAnecdoteAction}) => {
  useEffect(() => {
    initAnecdoteAction()
  }, [])

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote}/>
      )}
    </div>
  )
}

const mapStateToProps = ({anecdotes, filter}) => {
  const clonedAnecdotes = anecdotes.filter(item => {
    const re = new RegExp(filter, 'i')
    return re.test(item.content)
  })
  return {
    anecdotes: _.sortBy(clonedAnecdotes, 'votes').reverse()
  }
}

const mapDispatchToProps = {initAnecdoteAction}
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)