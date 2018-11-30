import React from 'react';
import './Login.css';
import useFormInput from '../../Functions/useFormInput'

const Login = (props) => {
  document.title = 'Login';
  let username = useFormInput();
  let password = useFormInput();
  console.log('Username', username.value);
  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <input className='textInput' {...username}/>
      <input className='textInput' {...password}/>
      <div className='loginButton'>Login</div>
      <div className='loginFooter'>
        <div className='signup'>Signup</div>
        <div className='forgetPassword'>Forget Password</div>
      </div>
    </div>
  )
}

export default Login;
