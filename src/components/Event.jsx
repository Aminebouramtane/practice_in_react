import React, { useState } from 'react';

const Event = () => {

    const[count,setCount]=useState(0)
    // const Counter = ()=>{
    //     return ;
    // }
  return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>+</button>
            <button onClick={()=>{
                setCount(count-1);
            }}>-</button>
        </div>
    )
}

export default Event