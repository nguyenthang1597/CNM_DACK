import React from 'react';
import './Login.css';
import useFormInput from '../../Functions/useFormInput'
const Login = ({isAuthenticating, authenticate}) => {
  document.title = 'Login';
  let secretkey = useFormInput('');
  let submit = () => {
    authenticate(secretkey.value);
  }

  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <input className='textInput' {...secretkey} placeholder='Secret key' />
      <div className={!isAuthenticating ? 'loginButton' : 'loginButtonLoading'} onClick={() => {if(!isAuthenticating) submit()}}>
        {
          !isAuthenticating && <div>Login</div>
        }
        {
          isAuthenticating && <div className="lds-dual-ring"></div>
        }
      </div>
    </div>
  )
}

export default Login;
