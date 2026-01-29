import React from 'react'
import Child from './Child';
const Parent = () => {
    const getData = (data) => {
        console.log("Data from Child:", data);
    }
    return (
    <div>
        <Child send={getData} />
    </div>
  )
}

export default Parent