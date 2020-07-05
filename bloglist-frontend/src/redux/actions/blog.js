import {setNotification} from './notification'
import {ADD_BLOG, COMMENT_BLOG, FETCH_BLOGS, LIKE_BLOG, REMOVE_BLOG} from '../types'
import blogService from '../../services/blogs'
export const fetchBlogs = () => async dispatch => {
  try {
    const blogs = await blogService.getAll()
    dispatch({
      type: FETCH_BLOGS,
      payload: blogs
    })
  } catch (e) {
    dispatch(setNotification({message: 'Cannot fetched blogs', type: 'error'}))
  }
}

export const createBlog = (payload) => async dispatch => {
  try {
    const blog = await blogService.create(payload)
    dispatch({
      type: ADD_BLOG,
      payload: blog
    })
    dispatch(setNotification({message: `${blog.title} by ${blog.author || 'unknown'} added`, type: 'success'}))
  } catch (e) {
    dispatch(setNotification({message: 'Cannot create blog', type: 'error'}))
  }
}

export const likeBlog = (payload) => async dispatch => {
  try {
    const blog = await blogService.likeById(payload.id)
    dispatch({
      type: LIKE_BLOG,
      payload: blog
    })
    dispatch(setNotification({message: `${blog.title} is liked`, type: 'success'}))
  } catch (e) {
    dispatch(setNotification({message: 'Cannot liked blog', type: 'error'}))
  }
}

export const removeBlog = (payload) => async dispatch => {
  try {
    await blogService.removeById(payload.id)
    dispatch({
      type: REMOVE_BLOG,
      payload: payload
    })
    dispatch(setNotification({message: `${payload.title} is removed`, type: 'success'}))
  } catch (e) {
    dispatch(setNotification({message: 'Cannot remove blog', type: 'error'}))
  }
}

export const addBlogById = (id) => async dispatch => {
  try {
    const blog = await blogService.getById(id)
    dispatch({
      type: ADD_BLOG,
      payload: blog
    })
  } catch (e) {
    dispatch(setNotification({message: 'Cannot fetched blog', type: 'error'}))
  }
}

export const leaveBlogCommentById = (id, comment) => async dispatch => {
  try {
    const blog = await blogService.commentById(id, comment)
    dispatch({
      type: COMMENT_BLOG,
      payload: blog
    })
  } catch (e) {
    dispatch(setNotification({message: 'Cannot leave comment', type: 'error'}))
  }
}