import React, {useState, useEffect} from 'react'
import './post.css'
import {faComment, faRetweet, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from './Comment'
import moment from 'moment'
import convertToPost from '../../Functions/convertToPost';
import getCommentReaction from '../../API/getCommentReaction'
import {withRouter} from 'react-router-dom'
const Post = (props) => {
  let [showComment, setShowComment] = useState(false);
  let [post, setPost] = useState({});
  let [comments, setComments] = useState([]);
  let [reactions, setReactions] = useState([]);
  useEffect(() => {
    convertToPost(props.post).then(_post => setPost(_post))
    getCommentReaction(props.post.Hash)
    .then(res => {
      setComments(res.data.comments);
      setReactions(res.data.reactions)
    })
  }, [convertToPost, getCommentReaction])
  return (
    <React.Fragment>
      <div className='post'>
         <div>
           <img className='post-avatar' src={post.ownerImage ? `data:image/jpeg;base64,${post.ownerImage}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar'/>
         </div>
         <div className='postContent'>
           <div className="header">
              <div className={post.owner && post.owner.length > 20 ? 'cut-word postOwner' : 'postOWner'} onClick={() => props.history.push(`/profile/${props.post.Address}`)}>{post.owner}</div>
              <div className='postAt'>{moment(post.time).format('DD/MM/YYYY HH:mm:ss')}</div>
           </div>
           <div className="body">
            <p>{
                post.content
              }</p>
            {
              post.image && <img src={`data:image/jpeg;base64,${post.image}`} />
            }
           </div>
           <div className="footer">
             <div className='postStat' onClick={() => setShowComment(!showComment)}><FontAwesomeIcon icon={faComment}/> {comments.length} <span className='tooltiptext'>Bình luận</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faRetweet}/> {0} <span className='tooltiptext'>Chia sẻ</span></div>
             <div className='postStat'><FontAwesomeIcon icon={faHeart}/> {0} <span className='tooltiptext'>Thích</span></div>
           </div>
         </div>
      </div>
      {
        showComment && <Comment comments={comments} reactions={reactions} close={setShowComment}/>
      }
    </React.Fragment>

  )
}

export default withRouter(Post)
