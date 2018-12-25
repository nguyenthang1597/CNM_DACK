import React, {useState, useEffect} from 'react'
import './comment.css'
import getCommentReaction from '../../../API/getCommentReaction'
import comment from '../../../Functions/comment'
import useFormInput from '../../../Functions/useFormInput'
const Comment = (props) => {
  let [comments, setComments] = useState([]);
  let [reactions, setReactions] = useState([]);
  let content = useFormInput('');
  console.log(props.hash);
  useEffect(() => {
    getCommentReaction(props.hash)
    .then(res => {
      setComments(res.data.comments);
      setReactions(res.data.reactions)
    })
  }, [getCommentReaction])
  console.log(comments);
  console.log(reactions);
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
          comments.map(comment => <div>{comment.Address} - {comment.Params.content.text}</div>)
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
