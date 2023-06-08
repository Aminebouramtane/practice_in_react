import React from 'react'

const Lists = () => {
    const list = ['html','css','js','php','MySql'];
    const elements = list.map((e)=>(<li>{e}</li>));
  return (
    <div>
        <ul>
            {elements}
        </ul>
    </div>
  )
}

export default Lists