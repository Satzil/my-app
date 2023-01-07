import React from 'react'
import List from './List'

const SInClass = ({sic,removes}) => {
  return (
    <>
        <div>
            <h1>students in class</h1>
            {sic.map((item)=>{
                return <List
                    key = {item.id}
                    name = {item.name}
                    roll = {item.roll}
                    intime = {item.intime}
                    removes = {removes}
                    id = {item.id}
                />
            })}
        </div>
        
        <hr/>
    </>
    
  )
}

export default SInClass