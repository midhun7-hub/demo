import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(true);
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <br />
        <h1>Like Button : {like ? "🤍" : "❤️"}</h1>
        <button onDoubleClick={()=>setLike(!like)}>Like</button>
    </div>
  )
}

export default State