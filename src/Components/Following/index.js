import React, { useState, useEffect, Fragment } from 'react';
import './following.css'
import getName from '../../API/getName';
import getAvatar from '../../API/getAvatar';
import makeTx from '../../Functions/makeTx';
import { connect } from 'react-redux'
import { AddFollow, RemoveFollow } from '../../Actions/Profile';
import {withRouter} from 'react-router-dom'

const Following = (props) => {
  const { publickey } = props;
  let [user, setUser] = useState('');
  let [avatar, setAvatar] = useState(null);
  let [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    getName(publickey).then(res => setUser(res.data.Name));
    getAvatar(publickey).then(res => {
      setAvatar(res.data.Avatar)
    }).catch(err => setAvatar(null));

    //Set hide button
    let _hideButton = false;
    if (props.PublicKey !== props.address) {
      if (props.type === 2) {
        if (props.arrayFollowing.find(e => e === publickey) || publickey === props.PublicKey) {
          _hideButton = true;
        }
      }
      else
        _hideButton = true;
    }
    else {
      if (props.type === 2 && props.arrayFollowing.find(e => e === publickey)) {
        _hideButton = true;
      }
    }

    setHideButton(_hideButton);

  }, [publickey])

  let handleButtonClick = async () => {
    switch (props.type) {
      case 1:
        {
          const Params = {
            key: 'followings',
            value: {
              addresses: props.array.filter(e => e !== publickey)
            }
          }
          try {
            await makeTx(props.PublicKey, 'update_account', Params, props.SecretKey);
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
          await makeTx(props.PublicKey, 'update_account', Params, props.SecretKey);
          props.AddFollow(publickey)
          setHideButton(true);
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
        <img className="fl-avatar" src={avatar ? `data:image/png;base64,${avatar}` : `https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png`} />

        {!hideButton && <button onClick={handleButtonClick} className="btn-follow-unfollow">{props.type === 1 ? "Bỏ theo dõi" : 'Theo dõi'}</button>}
      </div>
      <div className="info">
        {
          user !== '' &&
          <Fragment>
            <h3 onClick={() => props.history.push(`/profile/${publickey}`)} className='cut-word'>{user}</h3>
            <p className='cut-word'>{publickey}</p>
          </Fragment>
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  AddFollow: (address) => dispatch(AddFollow(address)),
  RemoveFollow: (address) => dispatch(RemoveFollow(address)),
})

export default withRouter(connect(null, mapDispatchToProps)(Following))
