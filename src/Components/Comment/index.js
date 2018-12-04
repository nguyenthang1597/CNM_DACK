import React from 'react'
import './Comment.css'
const Comment = ({owner, postAt, content}) => {
  return (
    <div className='post comment'>
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
      </div>
    </div>
  )
}

export default Comment;
