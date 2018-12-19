import React, {useState} from 'react'
import './post.css'
import {faComment, faRetweet, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../Comment'
import moment from 'moment'
const Post = ({Content, Method, Time}) => {
  let [showComment, setShowComment] = useState(false);
  return (
    <React.Fragment>
      <div className={`post ${showComment? 'showComment' : null}` }>
         <div>
           <img className='post-avatar' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
         </div>
         <div className='postContent'>
           <div className="header">
              <div className='postOwner'>{Method === 'AccountWasCreatedBy' ? Content : Method === 'ReceivePayment' ? Content.From : 'Me'}</div>
              <div className='postAt'>{moment(Time).format('DD/MM/YYYY hh:mm:ss')}</div>
           </div>
           <div className="body">
            <p>{
                Method === 'AccountWasCreatedBy' ? 'Tài khoản của bạn được tạo bởi ' + Content : Method === 'ReceivePayment' ?`Đã gửi cho bạn ${Content.Amount}` : `Bạn đã chuyển ${Content.Amount} cho ${Content.To}`
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
