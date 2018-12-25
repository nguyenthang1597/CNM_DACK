import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";
import ListPost from "../../Containers/ListPost";
import UpdateName from '../../Functions/updateName';
const Profile = ({ Profile, Posts, following, follower,Username,getPosts,SecretKey}) => {
  let [editProfile, setEditProfile] = useState(false);
  useEffect(() => {
    getPosts(Username,1, 30)
  }, [getPosts])
  console.log('Post', Posts)
  return (
    <div className="profile">
      <Header
        editProfile={editProfile}
        setEditProfile={setEditProfile}
        Avatar={Profile.Avatar}
        Following={following}
        Follower={follower}
      />
      <div className={!editProfile ? "grid" : "profile_grid"}>
        <div style={{ paddingTop: 40 }}>
          {!editProfile ? (
            <React.Fragment>
              <div className="ProfileCard_Name">{Profile.Name}</div>
              <div className="ProfileCard_Text">@{Username}</div>
              <div className="ProfileCard_Text">Sequence: {Profile.Sequence -1}</div>
              <div className="ProfileCard_Text">Balance: {Profile.Balance} TRE</div>
              <div className="ProfileCard_Text">Energy: {Profile.Energy} OXY</div>
            </React.Fragment>
          ) : (
            <ProfileForm Username={Username} SecretKey={SecretKey} {...Profile} />
          )}
        </div>
        <div>
        <Route
            exact
            path="/profile"
            render={props => <ListPost posts={Posts}/>}
          />
          <Route
            exact
            path="/profile/following"
            render={props => <ListFollow array={following} {...props} />}
          />
          <Route
            exact
            path="/profile/follower"
            render={props => <ListFollow array={follower} {...props} />}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileForm = ({ Name, Username, Phone, Address, DoB ,SecretKey}) => {
  let name = useFormInput(Name);
  const updateName = async() =>{
    console.log("NAME",Username)
    console.log("NAME1",SecretKey)
  try {
    await UpdateName(Username, name.value, SecretKey)
    alert('Update thành công!')
  } catch (error) {
    alert('Update không thành công')
  }
}
  return (
    <React.Fragment>
      <input {...name} placeholder="Họ Tên" className="ProfileInput Name" />
      <button className="btnName" onClick={updateName}>Cập nhật</button>
    </React.Fragment>
  );
};

export default Profile;
