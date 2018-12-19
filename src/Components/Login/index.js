import React from 'react';
import './Login.css';
import useFormInput from '../../Functions/useFormInput'
const Login = ({isAuthenticating, authenticate}) => {
  document.title = 'Login';
  let publickey = useFormInput();
  let secretkey = useFormInput();
  let submit = () => {
    authenticate("GAJQ47RMDTXYTCBMMW4A4DUMTB5RQLTGQZDMMABW6RTQJGKINJ4JTRTP", "SARDDYAEVEABQTGOZEDOI454XUBXCF5LMNDX6Q3MGFZ53MONF2XDDQIU");
  }


  return (
    <div className='loginContainer'>
      <div className='loginTitle'>Login</div>
      <input className='textInput' {...publickey} placeholder='Public key' value={"GAJQ47RMDTXYTCBMMW4A4DUMTB5RQLTGQZDMMABW6RTQJGKINJ4JTRTP"}/>
      <input className='textInput' {...secretkey} placeholder='Secret key' value={"SARDDYAEVEABQTGOZEDOI454XUBXCF5LMNDX6Q3MGFZ53MONF2XDDQIU"}/>
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
