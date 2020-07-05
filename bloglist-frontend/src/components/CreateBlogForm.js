import React, {useState} from 'react'
import blogService from '../services/blogs'
import Notification from './Notification'
import {useDispatch} from 'react-redux'
import {createBlog} from '../redux/actions/blog'

const CreateBlogForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const resetForm = () => {
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const updateNewValue = (e) => {
    const fieldName = e.target.name
    const value = e.target.value
    if (fieldName === 'title') {
      setTitle(value)
    } else if (fieldName === 'author') {
      setAuthor(value)
    } else if (fieldName === 'url') {
      setUrl(value)
    }
  }

  const addNewBlog = async (e) => {
    e.preventDefault()
    const payload = {title, author, url}
    await dispatch(createBlog(payload))
    resetForm()
  }

  return (
    <div>
      <h3>Add new blog</h3>
      <form>
        <div>
          title: <input value={title} type="text" name={'title'} onChange={updateNewValue}/>
        </div>
        <div>
          author: <input value={author} type="text" name={'author'} onChange={updateNewValue}/>
        </div>
        <div>
          url: <input value={url} type="text" name={'url'} onChange={updateNewValue}/>
        </div>
        <div>
          <button onClick={addNewBlog} type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlogForm
