import React from 'react'

const Greetings = (props)=> {
  return (
    
    <div className='new'>
    
     
      <h1>{props.name}</h1>
      <h2>{props.course}</h2>
      <h3>{props.marks}</h3>
       
    </div>
   
  )
}

export default Greetings
