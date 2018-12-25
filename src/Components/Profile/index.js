import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";
import makeTx from '../../Functions/makeTx'
import getAllInfo from '../../API/getAllInfo'

//  Doi thanh component
const Profile = ({PublicKey,SecretKey, MyProfile, match: { params } }) => {
  let [editProfile, setEditProfile] = useState(false);
  let [Profile, setProfile] = useState({});
  useEffect(() => {
    getProfile()
  }, [getProfile])

  let getProfile = () => {
    if(PublicKey === params.address) 
      setProfile(MyProfile)
    else 
      getAllInfo(params.address).then(res => setProfile(res.data))
  }

  return (
    <div className="profile">
      <Header
        editProfile={editProfile}
        setEditProfile={setEditProfile}
        Avatar={Profile.Avatar}
        Following={Profile.Following}
        Follower={Profile.Followers}
        Address={params.address}
        Energy={Profile.Energy}
        Money={Profile.Balance}
        Sequence={Profile.Sequence}
        PublicKey={PublicKey}
        SecretKey={SecretKey}
        getProfile={getProfile}
      />
      <div className={!editProfile ? "grid" : "profile_grid"}>
        <div style={{marginTop:40}}>
          {!editProfile ? (
            <React.Fragment>
              <div className="ProfileCard_Name">{Profile.Name}</div>
            </React.Fragment>
          ) : (
              <ProfileForm {...Profile} PublicKey={PublicKey} SecretKey={SecretKey} />
            )}
        </div>
        <div>
          <Route
            exact
            path="/profile/:id/following"
            render={props => <ListFollow address={params.address} type={1} array={Profile.Following} {...props} PublicKey={PublicKey} SecretKey={SecretKey} />}
          />
          <Route
            exact
            path="/profile/:id/follower"
            render={props => <ListFollow address={params.address} type={2} arrayFollowing={Profile.Following}  array={Profile.Followers} {...props} PublicKey={PublicKey} SecretKey={SecretKey}/>}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileForm = ({ Name, PublicKey, SecretKey }) => {
  let name = useFormInput(Name);
  let handleBtnUpdatenameClick = async() => {
      const Params = {
        key: 'name',
        value: name.value,
      }
      try {
        await makeTx(PublicKey,'update_account',Params,SecretKey);
        alert('Thành công')
      } catch (error) {
        alert('Thất bại')
      }
  }
  return (
    <React.Fragment>
      <input {...name} placeholder="Họ Tên" className="ProfileInput Name" />
      {name.value !== Name &&
      <button onClick={handleBtnUpdatenameClick} className="btn-update-name">Cập nhật</button> }
    </React.Fragment>
  );
};

export default Profile;
