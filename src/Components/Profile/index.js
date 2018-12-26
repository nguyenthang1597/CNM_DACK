import React from "react";
import "./profile.css";
import Header from "../Header";
import useFormInput from "../../Functions/useFormInput";
import { Route } from "react-router-dom";
import ListFollow from "../ListFollow";
import makeTx from '../../Functions/makeTx'
import getAllInfo from '../../API/getAllInfo'
import ListPost from "../ListPost";
import getAllPost from "../../API/getAllPost";

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editProfile: false,
      Profile: {},
      Post: [],
      page: 1,
      loadmore: false
    }
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.state.loadmore) {
      this.setState({
        loadmore: true
      }, async () => {
        const {Post, page} = this.state;
        let res = await getAllPost(this.props.match.params.address, page + 1, 20)
        if(res.data.data.length){
          this.setState({
            Post: Post.concat(res.data.data),
            page: page + 1,
            loadmore: false
          })
        }
  
      })
      
    }
  };

  getProfile = (props) => {
    if (props.PublicKey === props.match.params.address) {
      this.setState({
        Profile: props.MyProfile,
      })
    }
    else {
      getAllInfo(props.match.params.address).then(res =>  this.setState({
        Profile: {...res.data},
      }))
    }
  }
  componentDidMount()  {
    window.addEventListener('scroll', this.handleScroll)
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  

  componentWillMount() {
    this.getProfile(this.props);
    getAllPost(this.props.match.params.address, 1, 10)
    .then(res => {
      console.log(res)
      this.setState({Post: res.data.data})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.getProfile(nextProps);

  }

  setEditProfile = (value) => {
    this.setState({
      editProfile: value,
    })
  }

  handleBtnFollowChange = async(type, _address) => {
    
    const Params = {
      key: 'followings',
      value: {
        addresses: []
      }
    }

    switch(type) {
      case 1:
      {
        // UnFollow
        Params.value.addresses = this.props.MyProfile.Following.filter(e => e !== _address)
        try {
          await makeTx(this.props.PublicKey,'update_account',Params,this.props.SecretKey);
          this.props.RemoveFollow(_address);
        } catch (error) {
          alert('Lỗi')
        }
      }
      break;
      case 2: {
        // Follow
        Params.value.addresses = [...this.props.MyProfile.Following, _address];
        try {
          await makeTx(this.props.PublicKey,'update_account',Params,this.props.SecretKey);
          this.props.AddFollow(_address)
        } catch (error) {
          alert('Lỗi')
        }
      }
      break;
    }
    setTimeout( () => {
      // Delay
      this.getProfile(this.props);
    }, 3000)
  }

  render() {
    let {Profile, editProfile} = this.state;
    const {match: { params }, PublicKey, SecretKey} = this.props;
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
          MyProfile={this.props.MyProfile}
          handleBtnFollowChange={this.handleBtnFollowChange}
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
              render={props => <ListFollow address={params.address} type={2} arrayFollowing={this.props.MyProfile.Following} array={Profile.Followers} {...props} PublicKey={PublicKey} SecretKey={SecretKey} />}
            />
            <Route 
              exact
              path='/profile/:id'
              render={props => <ListPost PublicKey={PublicKey} posts={this.state.Post} SecretKey={SecretKey}/>}
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
