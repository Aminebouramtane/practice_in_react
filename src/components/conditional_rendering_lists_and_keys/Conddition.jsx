import React,{useState} from 'react'

const Conddition = () => {
    const [login, setLogin] = useState(false);
    let msg;
    if(login){
        msg =<h1>Im Not LogIn</h1>
    }else{
        msg =<h1>Im LogIn</h1>
    }
    console.log(login);
  return (
    <div>
      <div>{msg}</div><br />  
      <button onClick={()=>setLogin(login==false?true:false)}>
        LogIn
      </button>    
    </div>


  )
}

export default Conddition