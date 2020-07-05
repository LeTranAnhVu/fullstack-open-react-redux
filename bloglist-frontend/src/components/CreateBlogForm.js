import React from 'react'
import {useDispatch} from 'react-redux'
import {createBlog} from '../redux/actions/blog'
import {useField} from '../hooks'

const CreateBlogForm = () => {
  const {reset: resetTitle, ...titleField}= useField('title')
  const {reset: resetAuthor, ...authorField}= useField('author')
  const {reset: resetUrl, ...urlField}= useField('url')
  const dispatch = useDispatch()

  const resetForm = () => {
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  const addNewBlog = async (e) => {
    e.preventDefault()
    const {value:title} = titleField
    const {value:author} = authorField
    const {value:url} = urlField

    const payload = {title, author, url}
    await dispatch(createBlog(payload))
    resetForm()
  }

  return (
    <div>
      <h3>Add new blog</h3>
      <form>
        <div>
          title: <input {...titleField}/>
        </div>
        <div>
          author: <input {...authorField}/>
        </div>
        <div>
          url: <input {...urlField}/>
        </div>
        <div>
          <button onClick={addNewBlog} type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlogForm
