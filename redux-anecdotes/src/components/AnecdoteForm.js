import React, {useState} from 'react'
import {addAnecdoteAction} from '../actions/anecdote'
import {useDispatch} from 'react-redux'
import {pushNotification} from '../actions/notification'

const AnecdoteForm = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch()
  const handeData = (e) => {
    const value = e.target.value
    setData(value)
  }

  const onCreate = (e) => {
    e.preventDefault()
    if (data.trim()) {
      dispatch(addAnecdoteAction(data.trim()))
      dispatch(pushNotification({message: `you created ${data.trim()}`, type: 'info'}))
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


export default AnecdoteForm