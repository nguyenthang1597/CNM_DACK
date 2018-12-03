import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
return (
  <div className="Header">
      <div className="Header-Photo" style={{width:'100%', height: '320px'}} >
        <FontAwesomeIcon icon={faCamera}/>
      </div>
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
      <div className='big_avatar'>

      </div>
  </div>
)
}

export default Header
