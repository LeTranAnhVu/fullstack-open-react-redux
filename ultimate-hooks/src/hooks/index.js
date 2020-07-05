import {useEffect, useState} from 'react'
import axios from 'axios'

export const useField = (name, type='text') => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    name,
    type,
    value,
    onChange
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  useEffect(() => {
    getAll()
  }, [baseUrl])

  const getAll = async () => {
    const {data} = await axios.get(baseUrl)
    setResources(data)
  }

  const create = async (resource) => {
    const {data} = await axios.post(baseUrl, resource)
    return data
  }

  const service = {
    create,
    getAll
  }

  return [
    resources, service
  ]
}