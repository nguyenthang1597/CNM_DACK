import React from 'react'
import './post.css'
import {faComment, faRetweet, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Post = ({owner, postAt, content, actions: {answer, tweet, like}}) => {
  return (
   <div className="post">
      <div>
        <img className='post-avatar' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
      </div>
      <div className='postContent'>
        <div className="header">
           <div className='postOwner'>{owner}</div>
           <div className='postAt'>{postAt}</div>
        </div>
        <div className="body">
         <p>{content}</p>
        </div>
        <div className="footer">
          <div><FontAwesomeIcon icon={faComment}/> {answer}</div>
          <div><FontAwesomeIcon icon={faRetweet}/> {tweet}</div>
          <div><FontAwesomeIcon icon={faHeart}/> {like}</div>
          <div><FontAwesomeIcon icon={faEnvelope}/></div>
        </div>
      </div>


   </div>
  )
}

export default Post
