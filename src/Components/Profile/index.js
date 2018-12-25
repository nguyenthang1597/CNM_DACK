import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";
import ListPost from "../ListPost";
import getAvatar from "../../API/getAvatar";
import getName from "../../API/getName";
import getFollow from "../../API/getFollow";
import getEnergy from "../../API/getEnergy";
import getAllInfo from "../../API/getAllInfo";
const Profile = ({PublicKey,SecretKey, Posts, follower, match: { params } }) => {
  let [editProfile, setEditProfile] = useState(false);
  let [Profile, setProfile] = useState({});
  useEffect(() => {
    getProfile()
  }, [getProfile])

  let getProfile = () => {
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
              <ProfileForm {...Profile} />
            )}
        </div>
        <div>
          <Route
            exact
            path="/profile/:id/following"
            render={props => <ListFollow array={Profile.Following} {...props} />}
          />
          <Route
            exact
            path="/profile/:id/follower"
            render={props => <ListFollow array={Profile.Followers} {...props} />}
          />
        </div>
      </div>
    </div>
  );
};

const ProfileForm = ({ Name, Username, Phone, Address, DoB }) => {
  let name = useFormInput(Name);
  return (
    <React.Fragment>
      <input {...name} placeholder="Họ Tên" className="ProfileInput Name" />
      <div className="ProfileCard_Username">@{Username}</div>
    </React.Fragment>
  );
};

export default Profile;
