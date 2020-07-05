import React from 'react'
import {useDispatch} from 'react-redux'
import {createBlog} from '../redux/actions/blog'
import {useField} from '../hooks'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
      <Form onSubmit={addNewBlog}>
        <FormGroup>
          <Label >Title</Label>
          <Input {...titleField} />
        </FormGroup>
        <FormGroup>
          <Label >Author</Label>
          <Input {...authorField} />
        </FormGroup>
        <FormGroup>
          <Label >Url</Label>
          <Input {...urlField} />
        </FormGroup>
        <Button color={'primary'}>Add</Button>
      </Form>
    </div>
  )
}

export default CreateBlogForm
