import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";

const Profile = ({PublicKey,SecretKey, Profile, match: { params } }) => {
  let [editProfile, setEditProfile] = useState(false);
  // let [Profile, setProfile] = useState({});

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
            render={props => <ListFollow type={1} array={Profile.Following} {...props} PublicKey={PublicKey} SecretKey={SecretKey} />}
          />
          <Route
            exact
            path="/profile/:id/follower"
            render={props => <ListFollow type={2} arrayFollowing={Profile.Following}  array={Profile.Followers} {...props} PublicKey={PublicKey} SecretKey={SecretKey}/>}
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
