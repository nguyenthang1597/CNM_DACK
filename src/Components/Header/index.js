import React from 'react'
import './header.css'
const Header = (props) => {
return (
  <div>
      <img style={{width:'100%', height: '300px'}} src='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&h=350'/>
      <div className="bar">
        <ul className="Arrange" style={{marginLeft:'30%'}}>
          <li className="ArrangeSizeFit">
            <a title="9.840 Tweet">
              <span className="StatLabel">Tweets</span>
              <span className="StatValue">9.840</span>
            </a>
          </li>
          <li className="ArrangeSizeFit">
            <a  title="885 Following">
              <span className="StatLabel">Following</span>
              <span className="StatValue">885</span>
            </a>
          </li>
        </ul>
      </div>
      <img className='big_avatar' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
  </div>
)
}

export default Header
