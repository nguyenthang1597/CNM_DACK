import React from 'react';
import './Login.css';
import useFormInput from '../../Functions/useFormInput'
const Login = ({isAuthenticating, authenticate}) => {
  document.title = 'Login';
  let username = useFormInput();
  let password = useFormInput();
  let submit = () => {
    authenticate();
  }


  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <input className='textInput' {...username}/>
      <input className='textInput' {...password}/>
      <div className={!isAuthenticating ? 'loginButton' : 'loginButtonLoading'} onClick={() => submit()}>
        {
          !isAuthenticating && <div>Login</div>
        }
        {
          isAuthenticating && <div className="lds-dual-ring"></div>
        }
      </div>
      <div className='loginFooter'>
        <div className='signup'>Signup</div>
        <div className='forgetPassword'>Forget Password</div>
      </div>
    </div>
  )
}

export default Login;
