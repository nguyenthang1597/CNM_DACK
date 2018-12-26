import React, { useState, useEffect } from 'react';
import './CommentItem.css'
import moment from 'moment'
import getName from '../../../API/getName';
const CommentItem = (props) => {
  let [name, setName] = useState('');
  useEffect(() => {
    getName(props.comment.Address).then(res => setName(res.data.Name));
  }, [getName])
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          {name}
        </span>
        <span className="message-data-time">{moment(props.comment.Time).format('DD/MM/YYYY HH:mm:ss')}</span>
      </div>
      <div className="message my-message">
        {props.comment.Params.content.text}
      </div>
    </li>
  );
};

export default CommentItem;