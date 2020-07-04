// import {asObject} from '../utils/anecdoteUtils'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.payload
      const foundItem = state.find(item => item.id === id)
      const changeItem = {
        ...foundItem,
        votes: foundItem.votes + 1
      }
      return state.map(item => item.id === id ? changeItem : item)
    }
    case 'ADD_ANECDOTE': {
      const newAnec = action.payload
      return [...state, newAnec]
    }
    case 'INIT_ANECDOTE': {
      const list = action.payload
      return [...list]
    }
    default: {
      return state
    }
  }
}

export default reducer