import React from 'react'

const AddStudent = ({name,setName,roll,setRoll,adds}) => {
  return (
    <form onSubmit={adds}>
        <input
            type = "text"
            value = {name}
            placeholder = "Name"
            onChange = {(e) => setName(e.target.value)}
        />
        <input
            type = "text"
            value = {roll}
            placeholder = "Password"
            onChange = {(e) => setRoll(e.target.value)}
        />
        <input
            type= "submit"
        />
    </form>
  )
}

export default AddStudent