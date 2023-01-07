import React from 'react'

const Olist = ({name,roll,intime,outtime}) => {
  return (
    <div>
        <div>{name}</div>
        <div>{roll}</div>
        <div>{intime}</div>
        <div>{outtime}</div>
        
    </div>
  )
}

export default Olist