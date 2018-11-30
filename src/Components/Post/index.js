import React from 'react'
import './post.css'
import {faComment, faRetweet, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Post = (props) => {
  return (
   <div className="post">
       <div className="header row">
       <img className='avatar_32' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
            <h3>Nguyen Van A</h3>
            <h5>- 1/12</h5>
       </div>
       <div className="body">
        <p>This is body</p>
       </div>
       <div className="footer">
        <FontAwesomeIcon icon={faComment} style={{marginRight: 20}}/>
        <FontAwesomeIcon icon={faRetweet} style={{marginRight: 20}}/>
        <FontAwesomeIcon icon={faHeart} style={{marginRight: 20}}/>
       </div>
   </div>
  )
}

export default Post
