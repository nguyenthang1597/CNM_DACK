import React, {useState} from 'react'
import './LeftSide.css'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateAvatar} from '../../Actions/Profile'

const LeftSide = ({Profile, PublicKey, history}) => {
  return (
    <div className='leftSide'>
      <div className='profileCard'>
        <div className='bgUser'></div>
        <div className='profileCardContent'>
          <div className='profileCard-avatar'>
            {
              Profile.Avatar && <img src={`data:image/jpeg;base64,${Profile.Avatar.Avatar}`} className='profileCard-img-avatar' />
            }
          </div>
        
          <div className='userFields'>
            <div className='name'>{Profile.Name}</div>
            <span className='username'>@{PublicKey}</span>
          </div>
          <div className='stats'>
            <ul className='statlist'>
              <li className='stat'>
                  <span className='statLabel'>Người theo dõi</span>
                  <span className='statValue'>{Profile.Followers.length}</span>
              </li>
              <li className='stat'>
                  <span className='statLabel'>Đang theo dõi</span>
                  <span className='statValue'>{Profile.Following.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({Profile, Authenticate: {PublicKey}}) => ({Profile, PublicKey})
const mapDispathToProps = dispatch => ({
  updateAvatar: (image) => dispatch(updateAvatar(image))
})


export default withRouter(connect(mapStateToProps, mapDispathToProps)(LeftSide));
