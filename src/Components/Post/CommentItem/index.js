import React, {useState, useEffect} from 'react';
import './CommentItem.css'
import moment from 'moment'
import getName from '../../../API/getName';
const CommentItem = (props) => {
  let [name, setName] = useState('');
  useEffect(() => {
    getName(props.comment.Address).then(res => setName(res.data.Name));
  }, [getName])
  return (
    <div className='item'>
      <div className='header'>
      <div className={name.length > 20 ? 'cut-word postOwner' : 'postOWner'}>{name}</div>
      <div className='postAt'>{moment(props.comment.Time).format('DD/MM/YYYY HH:mm:ss')}</div>
      </div>
      
      <div>{props.comment.Params.content.text}</div>
    </div>
  );
};

export default CommentItem;