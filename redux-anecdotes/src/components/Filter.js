import React from 'react'
import {connect} from 'react-redux'
import {changeFilterAction} from '../actions/filter'

const Filter = ({changeFilterAction}) => {
  const style = {
    marginBottom: 10
  }
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    if(event.target.value) {
      changeFilterAction(event.target.value)
    }
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  changeFilterAction
}

export default connect(undefined, mapDispatchToProps)(Filter)