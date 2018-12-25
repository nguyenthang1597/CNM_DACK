import React, {useState, useEffect, Fragment} from 'react';
import './following.css'
const Following = ({publickey}) => {
  let [user, setUser] = useState('');
  return (
    <div className="card">
     <div className='header_follow'></div>
     <div className="avt">
      <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'/>
      <button className="btn">Following</button>
      </div>
      <div className="info">
      {
        user !== '' && 
        <Fragment>
          <h3 >{user}</h3>
        <p>{publickey}</p>

        </Fragment>
      }
      {
        user === '' &&
        <h3 style={{overflowY: 'hidden', overflowX: 'scroll'}}>{publickey}</h3>
      }
      </div>
    </div>
  )
}

export default Following
