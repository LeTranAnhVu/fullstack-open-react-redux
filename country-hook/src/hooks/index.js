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

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  const searchByName = async (name) => {
    try {
      const {data} = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      console.log(data)
      setCountry({...data[0], found: true})
    }catch (e) {
      setCountry({found: false})
    }

  }
  useEffect(() => {
    searchByName(name)
  },[name])

  return country
}