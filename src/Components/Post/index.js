import React, {useState} from 'react'
import './post.css'
import {faComment, faRetweet, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../Comment'

const Post = ({owner, postAt, content, actions: {comment, share, like}, comments = []}) => {
  let [showComment, setShowComment] = useState(false);
  return (
    <React.Fragment>
      <div className={`post ${showComment? 'showComment' : null}` }>
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
             <div className='postStat' onClick={() => setShowComment(!showComment)}><FontAwesomeIcon icon={faComment}/> {comment} <span className='tooltiptext'>Bình luận</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faRetweet}/> {share} <span className='tooltiptext'>Chia sẻ</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faHeart}/> {like} <span className='tooltiptext'>Thích</span></div>
           </div>
         </div>
      </div>
      {
        showComment &&
        <div className='comments'>
          {
            comments.length === 0 && <div style={{textAlign:'center', marginTop: 10}}>Không có bình luận</div>
          }
          {
            comments.map(comment => <Comment {...comment}/> )
          }
        </div>
      }
    </React.Fragment>

  )
}

export default Post
