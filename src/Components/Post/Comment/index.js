import React, {useState, useEffect} from 'react'
import './comment.css'
import comment from '../../../Functions/comment'
import useFormInput from '../../../Functions/useFormInput'
import CommentItem from '../CommentItem'
import InteractItem from '../InteractItem'
const Comment = (props) => {
  let [tab, setTab] = useState(1);
  let content = useFormInput('');
  const{comments, reactions} = props;
  return (
    <div className='comments'>
      <div className='cmHeader'>
        <div className='tabs cmtabs'>
          <div className={`tab ${tab === 1 ? 'active': null}`} onClick={() => setTab(1)}>Comment</div>
          <div className={`tab ${tab === 2 ? 'active': null}`} onClick={() => setTab(2)}>Reaction</div>
        </div>
        <div className='close' onClick={() => props.close(false)}>x</div>
      </div>
      <div className='cmList'>
        {
          tab === 1 && comments.map(comment => <CommentItem comment={comment} />)
        }
        {
          tab === 2 && reactions.map(reaction => <InteractItem reaction={reaction} />)
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
