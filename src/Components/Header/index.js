import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  let [editProfile, setEditProfile] = useState(false);
  return (
    <div className="Header">
      {editProfile? <div className="Header-Photo" style={{ width: '100%', height: '320px' }} >
        <div className="add-photo-container">
          <FontAwesomeIcon icon={faCamera} />
          <h4 className="add_photo">Add a header photo</h4>
        </div>
      </div> :
      <div className="Header-Photo-NoEdit" style={{ width: '100%', height: '320px' }} >
      </div>
      }
      
      <div className="bar">
        <div className="follow-container">

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

      {editProfile ?  <div className='big_avatar'>
        <div className="add-profile-container">
          <FontAwesomeIcon icon={faCamera} />
          <h4 className="add-profile-photo">Add a profile photo</h4>
        </div>
      </div>:  <div className='big-avatar-NoEdit'>
        <div className="add-profile-container-NoEdit">
          <FontAwesomeIcon icon={faCamera} />
        </div>
      </div>}
     
    </div>
  )
}

export default Header
