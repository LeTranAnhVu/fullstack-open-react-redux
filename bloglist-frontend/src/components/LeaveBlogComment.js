import React from 'react'
import {useField} from '../hooks'
import {useDispatch} from 'react-redux'
import {leaveBlogCommentById} from '../redux/actions/blog'
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label} from 'reactstrap'

const LeaveBLogComment = ({blog}) => {
  const {reset: resetComment, ...commentField} = useField('comment')
  const dispatch = useDispatch()

  const handleClick = async (e) => {
    e.preventDefault()
    const {value: comment} = commentField
    await dispatch(leaveBlogCommentById(blog.id, comment))
    resetComment()
  }
  return (
      <Form onSubmit={handleClick}>
        <InputGroup>
          <Input {...commentField}/>
          <InputGroupAddon addonType="append">
            <Button color="primary">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
  )
}
export default LeaveBLogComment
