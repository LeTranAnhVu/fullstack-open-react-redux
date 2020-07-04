import axios from 'axios'
import {asObject} from '../utils/anecdoteUtils'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (payload) => {
  const data = asObject(payload)
  const res = await axios.post(baseUrl, data)
  return res.data
}

export default {
  getAll,
  create
}