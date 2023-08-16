import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './../../redux/ApiCalls';
const Login = () => {
    const [username,setUsername]=useState("");
    const [password, setPassword]=useState("");
    const dispatch=useDispatch();
    
    const HandleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    }
  return (
     <div className='login-container'>
         <h2 className="login-title">Login</h2>
        <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button className="login-submit-button" onClick={HandleClick}>Login</button>
     </div>
  )
}

export default Login