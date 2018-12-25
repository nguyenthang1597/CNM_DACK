import React, {useState, useEffect} from 'react'
import './comment.css'
import comment from '../../../Functions/comment'
import useFormInput from '../../../Functions/useFormInput'
import CommentItem from '../CommentItem'
const Comment = (props) => {
 
  let content = useFormInput('');
  const{comments} = props;
  return (
    <div className='comments'>
      <div className='cmHeader'>
        <div className='tabs cmtabs'>
          <div className='tab active'>Comment</div>
          <div className='tab'>Reaction</div>
        </div>
        <div className='close' onClick={() => props.close(false)}>x</div>
      </div>
      <div className='cmList'>
        {
          comments.map(comment => <CommentItem comment={comment} />)
        }
      </div>
      <div className='cmInput'>
        <textarea className='cmtxta' {...content}/>
        <div className='cmButton' onClick={() => comment('GAJQ47RMDTXYTCBMMW4A4DUMTB5RQLTGQZDMMABW6RTQJGKINJ4JTRTP', props.hash, content.value, 'SARDDYAEVEABQTGOZEDOI454XUBXCF5LMNDX6Q3MGFZ53MONF2XDDQIU')}>Đăng</div>
      </div>
    </div>
  )
}

export default Comment
