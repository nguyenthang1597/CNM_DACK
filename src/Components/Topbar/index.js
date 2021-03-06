import React, { useState, useEffect } from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSignOutAlt, faDollarSign,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
const Topbar = (props) => {
  let [tab, setTab] = useState('home');
  let [caret, setCaret] = useState(false);
  function handleLogout() {
    props.logOut();
  }

  useEffect(() => {
    switch (props.location.pathname) {
      case "/":
        return setTab('home');
      case "/notification":
        return setTab('noti');
      case "/sendmoney":
        return setTab('smo');
      default:
        setTab(null);
    }
  }, [props.location.pathname])
  return (
    <div className='topbar'>
      <div className='topbar_content'>
        <div className='tabs'>
          <div className={`tab ${tab === 'home' ? 'active' : null}`} onClick={() => { 
            props.history.push('/');
            setTab('home');
            }}><FontAwesomeIcon icon={faHome} style={{ marginRight: 5 }} />Trang chủ</div>
          <div className={`tab ${tab === 'smo' ? 'active' : null}`} onClick={() => { props.history.push('/sendmoney'); setTab('smo'); }}><FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 5 }} />Chuyển tiền</div>
        </div>
        
        <div className='avatar' onClick={() => setCaret(!caret)}>
          <img className='avatar_32' src={props.Avatar ? `data:image/jpeg;base64,${props.Avatar.Avatar}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar' />
          {
            caret &&
            <div>
              <div className='dropdown-caret'>
                <span className='caret-outer'></span>
                <span className='caret-inner'></span>
              </div>
              <div className='dropdown-menu'>
                <li className='userInfo'>
                  <div className='fullName'>{props.Name}</div>
                </li>
                <div className='divider' />
                <li className='info'>
                  <Link to={`/profile/${props.PublicKey}`} style={{ textDecoration: 'none', color: 'black' }}><FontAwesomeIcon icon={faUser} style={{ marginRight: 10 }} /> Hồ sơ</Link>
                </li>
                <li className='info'>
                  <Link to={`/createaccount`} style={{ textDecoration: 'none', color: 'black' }}><FontAwesomeIcon icon={faUserPlus} style={{ marginRight: 10 }} />Tạo tài khoản</Link>
                </li>
                <div className='divider' />
                <li className='info'>
                  <Link to='/login' onClick={() => handleLogout()} style={{ textDecoration: 'none', color: 'black' }}><FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: 10 }} /> Đăng xuất</Link>
                </li>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default withRouter(Topbar);
