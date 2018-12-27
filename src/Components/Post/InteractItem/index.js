import React, {useState, useEffect} from 'react';
import moment from 'moment'
import getName from '../../../API/getName';
const InteractItem = (props) => {
  let [name, setName] = useState('');
  useEffect(() => {
    getName(props.reaction._id).then(res => setName(res.data.Name));
  }, [])
  return (
    <div className='item'>
      <div className='header'>
      <div className={name.length > 20 ? 'cut-word postOwner' : 'postOWner'}>{name}</div>
      </div>    
        
    </div>
  );
};

export default InteractItem;