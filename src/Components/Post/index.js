import React, { useState, useEffect } from 'react'
import './post.css'
import { faShare, faComment, faThumbsUp, faHeart,faGrinSquintTears, faSurprise, faAngry, faFrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from './Comment'
import moment from 'moment'
import convertToPost from '../../Functions/convertToPost';
const Post = (props) => {
  let [showComment, setShowComment] = useState(false);
  let [post, setPost] = useState({});

  useEffect(() => {
    convertToPost(props.post).then(_post => setPost(_post))

  }, [convertToPost])
  return (
    <React.Fragment>
      <div className='post'>
        <div>
          <img className='post-avatar' src={post.ownerImage ? `data:image/jpeg;base64,${post.ownerImage}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar' />
        </div>
        <div className='postContent'>
          <div className="header">
            <div className={post.owner && post.owner.length > 20 ? 'cut-word postOwner' : 'postOWner'}>{post.owner}</div>
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
            <div className='footer-item postStat'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <div className="footer-item-content">
                Thích
                <div className='popup-content'>
                  <div className='interaction like'><FontAwesomeIcon icon={faThumbsUp}/><span className='tooltiptext'>Thích</span></div>
                  <div className='interaction love'><FontAwesomeIcon icon={faHeart}/><span className='tooltiptext'>Yêu thích</span></div>
                  <div className='interaction haha'><FontAwesomeIcon icon={faGrinSquintTears}/><span className='tooltiptext'>Haha</span></div>
                  <div className='interaction haha'><FontAwesomeIcon icon={faSurprise}/><span className='tooltiptext'>Wow</span></div>
                  <div className='interaction haha'><FontAwesomeIcon icon={faFrown}/><span className='tooltiptext'>Buồn</span></div>
                  <div className='interaction angry'><FontAwesomeIcon icon={faAngry}/><span className='tooltiptext'>Phẫn nộ</span></div>
                </div>
              </div>
            </div>
            <div className='footer-item' onClick={() => setShowComment(!showComment)}>
              <FontAwesomeIcon icon={faComment} />
              <div className="footer-item-content">Bình luận</div>
            </div>
            <div className='footer-item'>
              <FontAwesomeIcon icon={faShare} />
              <div className="footer-item-content">Chia sẻ</div>
            </div>
          </div>
        </div>
      </div>
      {
        showComment && <Comment hash={props.post.Hash} close={setShowComment} />
      }
    </React.Fragment>

  )
}

export default Post
