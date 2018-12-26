import React from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";
import makeTx from '../../Functions/makeTx'
import getAllInfo from '../../API/getAllInfo'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editProfile: false,
      Profile: {},
    }
  }

  getProfile = (props) => {
    if (props.PublicKey === props.match.params.address) {
      this.setState({
        Profile: props.MyProfile,
      })
    }
    else {
      getAllInfo(props.match.params.address).then(res =>  this.setState({
        Profile: res.data,
      }))
    }
  }

  componentWillMount() {
    this.getProfile(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getProfile(nextProps);
  }

  setEditProfile = (value) => {
    this.setState({
      editProfile: value,
    })
  }

  render() {
    let {Profile, editProfile} = this.state;
    const {match: { params }, PublicKey, SecretKey} = this.props;
    console.log(Profile);
    return (
      <div className="profile">
        <Header
          editProfile={this.state.editProfile}
          setEditProfile={this.setEditProfile}
          Avatar={Profile.Avatar}
          Following={Profile.Following}
          Follower={Profile.Followers}
          Address={params.address}
          Energy={Profile.Energy}
          Money={Profile.Balance}
          Sequence={Profile.Sequence}
          PublicKey={PublicKey}
          SecretKey={SecretKey}
          getProfile={this.getProfile}
        />
        <div className={!editProfile ? "grid" : "profile_grid"}>
          <div style={{ marginTop: 40 }}>
            {!editProfile ? (
              <React.Fragment>
                <div className="ProfileCard_Name">{Profile.Name}</div>
              </React.Fragment>
            ) : (
                <ProfileForm {...Profile} PublicKey={PublicKey} SecretKey={SecretKey} ChangeName={this.props.ChangeName} />
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
              render={props => <ListFollow address={params.address} type={2} arrayFollowing={Profile.Following} array={Profile.Followers} {...props} PublicKey={PublicKey} SecretKey={SecretKey} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

const ProfileForm = ({ Name, PublicKey, SecretKey, ChangeName }) => {
  let name = useFormInput(Name);
  let handleBtnUpdatenameClick = async () => {
    const Params = {
      key: 'name',
      value: name.value,
    }
    try {
      await makeTx(PublicKey, 'update_account', Params, SecretKey);
      ChangeName(name.value);
    } catch (error) {
      alert('Thất bại')
    }
  }
  return (
    <React.Fragment>
      <input {...name} placeholder="Họ Tên" className="ProfileInput Name" />
      {name.value !== Name &&
        <button onClick={handleBtnUpdatenameClick} className="btn-update-name">Cập nhật</button>}
    </React.Fragment>
  );
};

export default Profile;
