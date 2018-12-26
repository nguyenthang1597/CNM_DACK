import React, {useState, useEffect, Fragment} from 'react';
import './following.css'
import getName from '../../API/getName';
import getAvatar from '../../API/getAvatar';
import makeTx from '../../Functions/makeTx';
import {connect} from 'react-redux'
import { AddFollow, RemoveFollow } from '../../Actions/Profile';

const Following = (props) => {
  const {publickey} = props;
  let [user, setUser] = useState('');
  let [avatar, setAvatar] = useState(null);
  useEffect(() => {
    getName(publickey).then(res => setUser(res.data.Name));
    getAvatar(publickey).then(res => {
      setAvatar(res.data.Avatar)
    }).catch(err => setAvatar(null));
  }, [publickey])

  let handleButtonClick = async() => {
    switch(props.type) {
      case 1:
      {
        const Params = {
          key: 'followings',
          value: {
            addresses: props.array.filter(e => e !== publickey)
          }
        }
        try {
          await makeTx(props.PublicKey,'update_account',Params,props.SecretKey);
          props.RemoveFollow(publickey);
        } catch (error) {
          alert('Loi')
        }
      }
      break;
      case 2: {
        const Params = {
          key: 'followings',
          value: {
            addresses: [...props.arrayFollowing, publickey]
          }
        }
        try {
          await makeTx(props.PublicKey,'update_account',Params,props.SecretKey);
          props.AddFollow(publickey)
        } catch (error) {
          alert('Loi')
        }
      }
      break;
    }
  }

  return (
    <div className="card">
     <div className='header_follow'></div>
     <div className="avt">
      <img className="fl-avatar" src={avatar ? `data:image/png;base64,${avatar}` : `https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png`}/>
      
      {(props.PublicKey !== props.address ? <div></div> : props.type === 2 && props.arrayFollowing.find(e => e === publickey)) ? <div></div> :
      <button onClick={handleButtonClick} className="btn-follow-unfollow">{props.type === 1 ? "Bỏ theo dõi" : 'Theo dõi'}</button> }
      </div>
      <div className="info">
      {
        user !== '' && 
        <Fragment>
          <h3 className='cut-word'>{user}</h3>
        <p className='cut-word'>{publickey}</p>

        </Fragment>
      }
      {
        user === '' &&
        <h3 className='cut-word'>{publickey}</h3>
      }
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  AddFollow: (address) => dispatch(AddFollow(address)),
  RemoveFollow: (address) => dispatch(RemoveFollow(address)),
})

export default connect(null, mapDispatchToProps)(Following)
