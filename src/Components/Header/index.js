import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const Header = ({editProfile, setEditProfile, Avatar}) => {
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
          <div className='ProfileBar_Item'>
            <span className='ProfileBar_label'>Following</span>
            <div className='ProfileBar_value'>1</div>
          </div>
          <div className='ProfileBar_Item'>
            <span className='ProfileBar_label'>Follower</span>
            <div className='ProfileBar_value'>1</div>
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

export default Header
