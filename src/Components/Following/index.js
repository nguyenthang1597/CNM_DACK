import React from 'react';
import './following.css'
const Following = ({user,username,content}) => {
  return (
    <div className="card">
     <div className='header_follow'></div>
     <div className="avt">
      <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'/>
      <button className="btn">Following</button>
      </div>
      <div className="info">
      <h3>{user}</h3>
      <p>{username}</p>
      <p>{content}</p>
      </div>
    </div>
  )
}

export default Following
