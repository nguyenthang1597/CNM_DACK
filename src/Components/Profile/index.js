import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLink, faCalendar,faBirthdayCake, faImage, faPhone} from '@fortawesome/free-solid-svg-icons'
import './profile.css'
import Header from '../Header'
import useFormInput from '../../Functions/useFormInput'
import {Route} from 'react-router-dom';
import ListFollow from '../../Containers/FollowComponent';
import ListPost from '../ListPost'


let posts = [{
  "id": 1,
  "owner": "Nguyễn Văn A",
  "postAt": "7/27/2018",
  "content": "울란바토르",
  "actions": {
    "comment": 29,
    "share": 1,
    "like": 75
  }
}, {
  "id": 1,
  "owner": "Nguyễn Văn A",
  "postAt": "7/27/2018",
  "content": "울란바토르",
  "actions": {
    "comment": 29,
    "share": 1,
    "like": 75
  }
}]

const Profile = ({Profile}) => {
  let [editProfile, setEditProfile] = useState(false);
  return (
   <div className="profile">
     <Header editProfile={editProfile} setEditProfile={setEditProfile} Avatar={Profile.Avatar} Wallpaper={Profile.Wallpaper}/>
     <div className={!editProfile ? 'grid' : 'profile_grid'}>
       <div style={{paddingTop: 40}}>
         {
           !editProfile ?
           <React.Fragment>
             <div className='ProfileCard_Name'>{Profile.Name}</div>
             <div className='ProfileCard_Text'>@ {Profile.Username}</div>
             {
               Profile.Phone && <div className='ProfileCard_Text'><FontAwesomeIcon icon={faPhone} style={{marginRight: 5}}/>{Profile.Phone}</div>
             }
             {
               Profile.DoB && <div className='ProfileCard_Text'><FontAwesomeIcon icon={faBirthdayCake} style={{marginRight: 5}}/>{Profile.DoB}</div>
             }
             {
               Profile.Address && <div className='ProfileCard_Text'><FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: 5}}/>{Profile.Phone}</div>
             }
             <div className='ProfileCard_JoinDate'><FontAwesomeIcon icon={faCalendar} style={{marginRight: 5, marginTop: 20}} />Đã tham gia tháng 12 năm 2018</div>
           </React.Fragment>
           :
           <ProfileForm {...Profile}/>
         }
       </div>
       <div>
         <Route exact path='/profile' render={props => {
             return(
               <div>
                 <div>Bài đăng của tôi</div>
                 <ListPost posts={posts}/>
               </div>
             )
           }} />
         <Route exact path='/profile/following' component={ListFollow} />
         <Route exact path='/profile/follower' component={ListFollow} />
       </div>
     </div>
   </div>
  )
}


const ProfileForm = ({Name, Username, Phone, Address, DoB}) => {
  let name = useFormInput(Name);
  let phone = useFormInput(Phone);
  let address = useFormInput(Address);
  let dob = useFormInput(DoB);
  return (
    <React.Fragment>
      <input {...name} placeholder='Họ Tên' className='ProfileInput Name'/>
      <div className='ProfileCard_Username'>@{Username}</div>
      <input {...phone} placeholder='Số Điện Thoại' className='ProfileInput'/>
      <input {...address} placeholder='Địa Chỉ' className='ProfileInput'/>
      <input {...dob} placeholder='Ngày Sinh' className='ProfileInput' type='date'/>
    </React.Fragment>
  )
}





export default Profile
