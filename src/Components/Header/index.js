import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router-dom'
import resizeImage from 'resize-image'
import makeTx from '../../Functions/makeTx';
const Marker = 'data:image/jpeg;base64,'
let i =1;
const Header = ({handleBtnFollowChange ,getProfile, PublicKey,SecretKey, editProfile, setEditProfile, Avatar, history, Following, MyProfile, Follower, Address, Energy, Money, Sequence}) => {
  let [newAvatar, setNewAvatar] = useState(null);
  let handleImgChange = (event) => {
    if (event.target.files && event.target.files[0]) {
           let reader = new FileReader();
           reader.onload = (e) => {
             setNewAvatar(e.target.result)
           };
           reader.readAsDataURL(event.target.files[0]);
       }
  }

  let updateAvatar = () => {
    var tmpimage = new Image();
    tmpimage.onload = async() => {
      var data = resizeImage.resize(tmpimage, 100, 100, resizeImage.JPEG);
      let params = {
        key: 'picture',
        value: data.slice(Marker.length)
      }
      try {
        await makeTx(PublicKey,'update_account', params, SecretKey)
        alert('Update avatar thành công!')
        getProfile()
      } catch (error) {
        alert('update avatar không thành công')
      }
    }
    tmpimage.src= newAvatar;
  }

  return (
    <div className="Header">
      <div className={editProfile ? "Header-Photo" : "Header-Photo-NoEdit"} style={{ width: '100%', height: '175px' }} >
        <div className="add-photo-container">
          
            
        </div>
      </div>
      <div className="bar">
        <div className="follow-container">
          <div className='ProfileBar_Item' onClick={()=>{history.push(`/profile/${Address}`)}}>
            <span className='ProfileBar_label'>Bài đăng</span>
          </div>
          <div className='ProfileBar_Item' onClick={()=>{history.push(`/profile/${Address}/following`)}}>
            <span className='ProfileBar_label'>Đang theo dõi</span>
            <div className='ProfileBar_value'>{Following ? Following.length : 0}</div>
          </div>
          <div className='ProfileBar_Item' onClick={()=>{history.push(`/profile/${Address}/follower`)}}>
            <span className='ProfileBar_label'>Theo dõi bởi</span>
            <div className='ProfileBar_value'>{Follower ? Follower.length : 0}</div>
          </div>
          <div className='ProfileBar_Item'>
            <span className='ProfileBar_label'>Năng lượng</span>
            <div className='ProfileBar_value'>{Energy ? `${Math.ceil(Energy)} OXY` : 0}</div>
          </div>
          <div className='ProfileBar_Item'>
            <span className='ProfileBar_label'>Tiền</span>
            <div className='ProfileBar_value'>{Money ? `${Money} CEL`: 0}</div>
          </div>
          <div className='ProfileBar_Item'>
            <span className='ProfileBar_label'>Sequence</span>
            <div className='ProfileBar_value'>{Sequence}</div>
          </div>
        </div>
        {
          PublicKey === Address ?
          <div className="button-container">
          {!editProfile ?
            <button onClick={()=> setEditProfile(true)}>Edit</button> :
            <React.Fragment>
              <button onClick={()=> {
                setNewAvatar(null)
                setEditProfile(false)
              }}>Cancel</button>
            </React.Fragment>
          }
        </div> : 
          <div className='button-container'>
            {MyProfile.Following.find(e => e === Address) ? <button onClick={() => handleBtnFollowChange(1, Address)}>Bỏ theo dõi</button> : <button onClick={() => handleBtnFollowChange(2, Address)}>Theo dõi</button>}
          </div> 
        }
        
      </div>

      {
        Avatar ?
        <div className='big_avatar'>
          <div className="add-profile-container">
            <img src={`${Avatar.Marker}${Avatar.Avatar}`} className='ProfileAvatar'/>
            {
              editProfile && <React.Fragment>
              <FontAwesomeIcon icon={faCamera} style={{zIndex: 1, position: 'relative'}}/>
              <h4 className="add-profile-photo">Choose new image</h4>
              <input type='file' className='ProfileAvatarInput' onChange={handleImgChange}/>
              {
                newAvatar && 
                <React.Fragment>
                  <img src={newAvatar} className='NewProfileAvatar'/>
                  <div className='btnSaveAvatar' onClick={updateAvatar}>Thay đổi ảnh đại diện </div>
                </React.Fragment>
              }
            </React.Fragment>
            }
          </div>
        </div>
        :
        editProfile ?  <div className='big_avatar'>
        <div className="add-profile-container">
          <FontAwesomeIcon icon={faCamera} />
          <h4 className="add-profile-photo">Add a profile photo</h4>
        </div>
      </div>:  <div className='big-avatar-NoEdit'>
        <div className="add-profile-container-NoEdit">
          <FontAwesomeIcon icon={faCamera} />
        </div>
      </div>
      }
    </div>
  )
}

export default withRouter(Header)
