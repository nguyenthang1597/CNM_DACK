import React from 'react';
import './Login.css';
import useFormInput from '../../Functions/useFormInput'
const Login = ({isAuthenticating, authenticate}) => {
  document.title = 'Login';
  let publickey = useFormInput();
  let secretkey = useFormInput();
  let submit = () => {
    authenticate(publickey.value, secretkey.value);
  }


  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <input className='textInput' {...publickey} placeholder='Public key'/>
      <input className='textInput' {...secretkey} placeholder='Secret key'/>
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
