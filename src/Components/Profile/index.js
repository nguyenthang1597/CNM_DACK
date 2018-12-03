import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLink, faCalendar,faBirthdayCake, faImage, faPhone} from '@fortawesome/free-solid-svg-icons'
import './profile.css'
import Header from '../Header'
import useFormInput from '../../Functions/useFormInput'

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
     </div>
     {
       editProfile && <div style={{width: 'calc(100vw - 362px)', height: 'calc(100vh - 427px)', backgroundColor: 'rgba(0,0,0,0.2)', position: 'absolute', top: 427, left: 362}}></div>
     }
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
      <input {...name} placeholder='Name' className='ProfileInput Name'/>
      <div className='ProfileCard_Username'>{Username}</div>
      <input {...phone} placeholder='Phone' className='ProfileInput'/>
      <input {...address} placeholder='Address' className='ProfileInput'/>
      <input {...dob} placeholder='Date of birth' className='ProfileInput' type='date'/>
    </React.Fragment>
  )
}





export default Profile
