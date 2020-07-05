import React from 'react'
import {useField} from '../hooks'
import {useDispatch} from 'react-redux'
import {leaveBlogCommentById} from '../redux/actions/blog'

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
    <form onSubmit={handleClick}>
      <input {...commentField}/>
      <button type="submit">add comment</button>
    </form>
  )
}
export default LeaveBLogComment
