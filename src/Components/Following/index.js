import React, {useState, useEffect, Fragment} from 'react';
import './following.css'
import getName from '../../API/getName';
const Following = ({publickey}) => {
  let [user, setUser] = useState('');
  useEffect(() => {
    getName(publickey).then(res => setUser(res.data.Name))
  })
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
          <h3 className='cut-word'>{user}</h3>
        <p className='cut-word'>{publickey}</p>

        </Fragment>
      }
      {
        user === '' &&
        <h3 className='cut-word'>{publickey}</h3>
      }
      </div>
    </div>
  )
}

export default Following
