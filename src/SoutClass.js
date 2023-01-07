import React from 'react'
import Olist from './Olist'
const SoutClass = ({soc}) => {
  return (
    
        <div>
            <h1>students outside class</h1>
            {soc.map((item)=>{
              return <Olist
                  name = {item.name}
                  roll = {item.roll}
                  intime = {item.intime}
                  outtime = {item.outtime}
                  key = {item.id}

                />
            })}
        </div>
        
  )
}

export default SoutClass