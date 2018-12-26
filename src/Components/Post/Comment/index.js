import React, { useState } from 'react'
import './comment.css'
import comment from '../../../Functions/comment'
import useFormInput from '../../../Functions/useFormInput'
import CommentItem from '../CommentItem'
import Interact from '../Interact'
import { connect } from 'react-redux'

const Comment = (props) => {
  let [tab, setTab] = useState(1);
  let content = useFormInput('');
  const { comments, reactions } = props;
  return (
    <div className='comments'>
      <div className='cmHeader'>
        <div className='tabs cmtabs'>
          <div className={`tab ${tab === 1 ? 'active' : null}`} onClick={() => setTab(1)}>Comment</div>
          <div className={`tab ${tab === 2 ? 'active' : null}`} onClick={() => setTab(2)}>Reaction</div>
        </div>
        <div className='close' onClick={() => props.close(false)}>x</div>
      </div>

      {tab === 1 &&
        <div className="cmList">
          <div className="chat-history cmList" >
            <ul>
              {
                comments.map(comment => <CommentItem comment={comment} />)
              }
            </ul>
          </div>
          <div className='cmInput'>
            <textarea className='cmtxta' {...content} />
            <div className='cmButton' onClick={() => { comment(props.PublicKey, props.hash, content.value, props.SecretKey); content.setValue('') }}>Đăng</div>
          </div>
        </div>
      }

      {
        tab === 2 && <Interact reactions={props.reactions}/>
      }
    </div>
  )
}

const mapStateToProps = ({ Authenticate: { PublicKey, SecretKey } }) => ({ PublicKey, SecretKey })

export default connect(mapStateToProps)(Comment)
