import {ADD_BLOG, FETCH_BLOGS, REMOVE_BLOG, LIKE_BLOG, COMMENT_BLOG} from '../types'

const initialState = []

const blogReducer = (state = initialState, {type, payload=undefined}) => {
  switch (type) {
    case FETCH_BLOGS : {
      return [...payload]
    }
    case ADD_BLOG: {
      return [...state, payload]
    }
    case REMOVE_BLOG: {
      return state.filter(item => item.id !== payload.id)
    }
    case LIKE_BLOG: {
      return state.map(item => item.id === payload.id ? payload :item )
    }
    case COMMENT_BLOG: {
      return state.map(item => item.id === payload.id ? payload :item )
    }
    default: {
      return state
    }
  }
}

export default blogReducer