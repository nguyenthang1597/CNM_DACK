import React, { useState, useEffect } from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faEnvelope, faUser, faSignOutAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
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
  }, [props.location.pathname, props.getInfo])
  return (
    <div className='topbar'>
      <div className='topbar_content'>
        <div className='tabs'>
          <div className={`tab ${tab === 'home' ? 'active' : null}`} onClick={() => { 
            props.history.push('/');
            setTab('home');
            }}><FontAwesomeIcon icon={faHome} style={{ marginRight: 5 }} />Trang chủ</div>
          <div className={`tab ${tab === 'noti' ? 'active' : null}`} onClick={() => { props.history.push('/notification'); setTab('noti'); }} ><FontAwesomeIcon icon={faBell} style={{ marginRight: 5 }} />Thông báo</div>
          <div className={`tab ${tab === 'smo' ? 'active' : null}`} onClick={() => { props.history.push('/sendmoney'); setTab('smo'); }}><FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 5 }} />Chuyển tiền</div>
        </div>
        <input className="btnSearch" placeholder="Tìm kiếm"/>
        <div className='avatar' onClick={() => setCaret(!caret)}>
          <img className='avatar_32' src={props.Avatar || 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar' />
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
                  <div className='name'>@{props.Username}</div>
                </li>
                <div className='divider' />
                <li className='info'>
                  <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}><FontAwesomeIcon icon={faUser} style={{ marginRight: 10 }} /> Hồ sơ</Link>
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
