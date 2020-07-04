import React, {useState} from 'react'
import {addAnecdoteAction} from '../actions/anecdote'
import {useDispatch} from 'react-redux'
import {pushNotification} from '../actions/notification'
import anecdoteService from '../service/anecdote'

const AnecdoteForm = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch()
  const handeData = (e) => {
    const value = e.target.value
    setData(value)
  }

  const onCreate = async (e) => {
    e.preventDefault()
    if (data.trim()) {
      try {
        const newAnec = await anecdoteService.create(data.trim())
        dispatch(addAnecdoteAction(newAnec))
        dispatch(pushNotification({message: `you created ${data.trim()}`, type: 'info'}))
        setData('')
      }catch (e) {
        console.log(e.response)
      }


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