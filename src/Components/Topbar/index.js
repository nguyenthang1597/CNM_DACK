import React, {useState} from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Topbar = (props) => {
  let [tab, setTab] = useState('home');
  let [caret, setCaret] = useState(false);
  return (
    <div className='topbar'>
      <div className='topbar_content'>
        <div className='tabs'>
          <div className={`tab ${tab === 'home' ? 'active' : null}`} onClick={() => setTab('home')}><FontAwesomeIcon icon={faHome} style={{marginRight: 5}}/>Trang chu</div>
          <div className={`tab ${tab === 'noti' ? 'active' : null}`} onClick={() => setTab('noti')}><FontAwesomeIcon icon={faBell} style={{marginRight: 5}}/>Thông báo</div>
          <div className={`tab ${tab === 'msg' ? 'active' : null}`} onClick={() => setTab('msg')}><FontAwesomeIcon icon={faEnvelope} style={{marginRight: 5}}/>Tin nhắn</div>
        </div>
        <div className='avatar' onClick={() => setCaret(!caret)}>
          <img className='avatar_32' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
          {
            caret &&
            <div>
              <div className='dropdown-caret'>
                <span className='caret-outer'></span>
                <span className='caret-inner'></span>
              </div>
              <div className='dropdown-menu'>
                <li className='userInfo'>
                  <div className='fullName'>Nguyễn Văn A</div>
                  <div className='name'>@NguyenVanA123</div>
                </li>
                <div className='divider'/>
                <li className='info'>
                  <Link to='/info'><FontAwesomeIcon icon={faUser} style={{marginRight: 10}}/> Hồ sơ</Link>
                </li>
                <div className='divider'/>
                <li>
                  Đăng xuất
                </li>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Topbar;
