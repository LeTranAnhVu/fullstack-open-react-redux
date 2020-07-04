import React from 'react'
import {useDispatch} from 'react-redux'
import {changeFilterAction} from '../actions/filter'

const Filter = () => {
  const style = {
    marginBottom: 10
  }
  const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    if(event.target.value) {
      dispatch(changeFilterAction(event.target.value))
    }
  }


  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter