import React, {useState, useEffect, Fragment} from 'react';
import './following.css'
import getInfoFollow from '../../API/getInfo'
const Following = ({publickey}) => {
  let [user, setUser] = useState('');
  useEffect(() => {
    getInfoFollow(publickey).then(res => {
      setUser(res.data)
    })
  }, [getInfoFollow])
  return (
    <div className="card">
     <div className='header_follow'></div>
     <div className="avt">
      <img src={user.Avatar ? `${user.Avatar.Marker}${user.Avatar.Avatar}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar' />
      <button className="btn">Following</button>
      </div>
      <div className="info">
      {
        user !== '' && 
        <Fragment>
          <h3 >{user.Name}</h3>
          <p className='username'>{publickey}</p>

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
