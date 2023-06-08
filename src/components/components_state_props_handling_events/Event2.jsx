import React from 'react'

const Event2 = () => {
  return (
    <div>
        <label htmlFor="">Type anything her with opning console   :</label>
        <input type="text" onChange={(event)=>{
            console.log(event.target.value);
        }}/>
    </div>
  )
}

export default Event2