import React, {useState} from 'react'
import {addAnecdoteAction} from '../actions/anecdote'
import {connect} from 'react-redux'

const AnecdoteForm = ({addAnecdoteAction}) => {
  const [data, setData] = useState('')
  const handeData = (e) => {
    const value = e.target.value
    setData(value)
  }

  const onCreate = async (e) => {
    e.preventDefault()
    if (data.trim()) {
      addAnecdoteAction(data.trim())
      setData('')
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div><input value={data} onChange={handeData}/></div>
        <button onClick={onCreate}>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addAnecdoteAction
}
export default connect(undefined, mapDispatchToProps)(AnecdoteForm)