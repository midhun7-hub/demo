import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <button onClick={()=>send("Hello from Child Component")}>
            Send Data to Parent
        </button>
    </div>
  )
}

export default Child