import React, {useState} from 'react'
import './LeftSide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAvatar} from '../../Actions/Profile'

const LeftSide = ({Avatar, updateAvatar, history}) => {
  let [clickAvatar, setClickAvatar] = useState(false);
  let handleImgChange = (event) => {
    if (event.target.files && event.target.files[0]) {
           let reader = new FileReader();
           reader.onload = (e) => {
               
           };
           reader.readAsDataURL(event.target.files[0]);
       }
       setClickAvatar(false)
  }
  console.log(Avatar);
  return (
    <div className='leftSide'>
      <div className='profileCard'>
        <div className='bgUser'></div>
        <div className='profileCardContent'>
          <div className='profileCard-avatar' onClick={() => {
              if(Avatar) history.push('/profile');
              else setClickAvatar(!clickAvatar);
            }}>
            {
              !Avatar && <FontAwesomeIcon icon={faCamera}/>
            }
            {
              Avatar && <img src={Avatar} className='profileCard-img-avatar' />
            }
          </div>
          {
            clickAvatar &&
            <div>
              <div className='dropdown-caret clickAvatar'>
                <span className='caret-outer'></span>
                <span className='caret-inner'></span>
              </div>
              <div className='dropdown-clickAvatar-menu'>
                <div className='menuItem'>
                  <div className='menuText'>Tải ảnh lên</div>
                  <input type='file' title='Tải ảnh lên' className='fileInput' onChange={handleImgChange}/>
                </div>
                <div className='divider'/>
                  <div className='menuItem' onClick={() => setClickAvatar(!clickAvatar)}>
                    <div className='menuText'>Huỷ</div>
                  </div>
              </div>
            </div>
          }
          <div className='userFields'>
            <div className='name'>Nguyễn Văn A</div>
            <span className='username'>@NguyenVanA123</span>
          </div>
          <div className='stats'>
            <ul className='statlist'>
              <li className='stat'>
                  <span className='statLabel'>Tweet</span>
                  <span className='statValue'>0</span>
              </li>
              <li className='stat'>
                  <span className='statLabel'>Following</span>
                  <span className='statValue'>0</span>
              </li>
              <li className='stat'>
                  <span className='statLabel'>Follower</span>
                  <span className='statValue'>0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({Profile: {Avatar}}) => ({Avatar})
const mapDispathToProps = dispatch => ({
  updateAvatar: (image) => dispatch(updateAvatar(image))
})


export default withRouter(connect(mapStateToProps, mapDispathToProps)(LeftSide));
