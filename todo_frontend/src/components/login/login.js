import './login.css'
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Login() {

  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const authenticate=()=>
{
  if(email==="admin@gmail.com"&&password==="12345")
  {
    localStorage.setItem("isAuthenticated",true)
    navigate('/user');
  }
  else
  {
    alert("Invalid Login Credentials");
  }


}

  return (
   <div className='main'>
   <h1>Create Your Own To-Do List..</h1>
    <div className="loginBox">
      <h1>Login</h1>
      <div className="lockIcon">
        <LockOpenIcon></LockOpenIcon>
      </div>
      <div className="box"><TextField required onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /></div>
      <div className='box'><TextField required type="password" onChange={(e)=>setPassword(e.target.value)}  id="outlined-basic" label="Password" variant="outlined" /></div>
      <div className='button'><Button  variant="contained" onClick={authenticate}>Sign In</Button></div>       
    </div>
   </div>
  );
}


export default Login;
