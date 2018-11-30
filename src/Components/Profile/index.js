import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLink, faCalendar,faBirthdayCake, faImage} from '@fortawesome/free-solid-svg-icons'
import './profile.css'
const Profile = (props) => {
  return (
   <div className="profile">
       <h3>Nguyễn Văn A</h3>
       <p>@nguyenvanA</p>
       <div className="title">
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: 10}}/>
        Ho Chi Minh city, VN
        </div>
        <div className="title">
        <FontAwesomeIcon icon={faLink} style={{marginRight: 10}}/>
        <a>nguyenVanA.com</a>
        </div>
        <div className="title">
        <FontAwesomeIcon icon={faCalendar} style={{marginRight: 10}}/>
        Tham gia tháng 11/2018
        </div>
        <div className="title">
        <FontAwesomeIcon icon={faBirthdayCake} style={{marginRight: 10}}/>
        1/1/1997
        </div>
   </div>
  )
}

export default Profile
