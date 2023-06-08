import React from 'react'
import Button from './Button';

const Welcome = (props) => {

    {console.log(props);}
  return (
    <>
        <div>Welcome, {props.name}</div>
        <p>Age : {props.age}</p>
        <p>Age : {props.dev}</p>
        <Button detail="More Details"/>
    </>
  )
}

export default Welcome