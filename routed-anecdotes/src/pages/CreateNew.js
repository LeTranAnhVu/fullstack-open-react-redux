import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useField} from '../hooks'
const CreateNew = ({addNew}) => {
  const history = useHistory()
  
  const content= useField('content')
  const author = useField('author')
  const info = useField('info')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author:author.value,
      info: info.value,
      votes: 0
    })
    history.push('/')
  }
  const resetFields = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type='submit'>create</button>
        <button type='button' onClick={resetFields}>reset</button>
      </form>
    </div>
  )

}

export default CreateNew