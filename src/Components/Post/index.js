import React, {useState, useEffect} from 'react'
import './post.css'
import {faComment, faRetweet, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../Comment'
import moment from 'moment'
import convertToPost from '../../Functions/convertToPost';
const Post = (props) => {
  let [showComment, setShowComment] = useState(false);
  let [post, setPost] = useState({});

  useEffect(() => {
    let _post = convertToPost(props.post);
    setPost(_post)
  }, [convertToPost])
  return (
    <React.Fragment>
      <div className={`post ${showComment? 'showComment' : null}` }>
         <div>
           <img className='post-avatar' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
         </div>
         <div className='postContent'>
           <div className="header">
              <div className='postOwner'>{post.owner}</div>
              <div className='postAt'>{moment(post.time).format('DD/MM/YYYY hh:mm:ss')}</div>
           </div>
           <div className="body">
            <p>{
                post.content
              }</p>
           </div>
           <div className="footer">
             <div className='postStat' onClick={() => setShowComment(!showComment)}><FontAwesomeIcon icon={faComment}/> {0} <span className='tooltiptext'>Bình luận</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faRetweet}/> {0} <span className='tooltiptext'>Chia sẻ</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faHeart}/> {0} <span className='tooltiptext'>Thích</span></div>
           </div>
         </div>
      </div>

    </React.Fragment>

  )
}

export default Post
