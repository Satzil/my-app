import React from 'react'

const List = ({name,roll,intime,removes,id}) => {
  return (
    <div>
        <div>{name}</div>
        <div>{intime}</div>
        <div>{roll}</div>
        <button onClick={()=>removes(id)}>Remove</button>
    </div>
  )
}

export default List