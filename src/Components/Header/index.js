import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router-dom'
// import Following from '../Following';
const Header = ({editProfile, setEditProfile, Avatar, history, Following, Follower}) => {
  return (
    <div className="Header">
      <div className={editProfile ? "Header-Photo" : "Header-Photo-NoEdit"} style={{ width: '100%', height: !editProfile ? '175px' : '320px' }} >
        <div className="add-photo-container">
          {
            editProfile && <React.Fragment>
            <FontAwesomeIcon icon={faCamera} />
            <h4 className="add_photo">Add a header photo</h4>
          </React.Fragment>
          }
        </div>
      </div>


      <div className="bar">
        <div className="follow-container">
          <div className='ProfileBar_Item' onClick={()=>{history.push('/profile/following')}}>
            <span className='ProfileBar_label'>Đang theo dõi</span>
            <div className='ProfileBar_value'>{Following ? Following.length : 0}</div>
          </div>
          <div className='ProfileBar_Item' onClick={()=>{history.push('/profile/follower')}}>
            <span className='ProfileBar_label'>Theo dõi</span>
            <div className='ProfileBar_value'>{Follower ? Follower.length : 0}</div>
          </div>
        </div>
        <div className="button-container">
          {!editProfile ?
            <button onClick={()=> setEditProfile(true)}>Edit</button> :
            <React.Fragment>
              <button onClick={()=> setEditProfile(false)}>Cancel</button>
              <button>Save changes</button>
            </React.Fragment>
          }
        </div>
      </div>

      {
        Avatar ?
        <div className='big_avatar'>
          <div className="add-profile-container">
            <img src={Avatar} className='ProfileAvatar'/>
            {
              editProfile && <React.Fragment>
              <FontAwesomeIcon icon={faCamera} style={{zIndex: 1, position: 'relative'}}/>
              <h4 className="add-profile-photo">Choose new image</h4>
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
