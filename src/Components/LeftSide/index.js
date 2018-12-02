import React from 'react'
import './LeftSide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
const LeftSide = (props) => {
  return (
    <div className='leftSide'>
      <div className='profileCard'>
        <div className='bgUser'></div>
        <div className='profileCardContent'>
          <div className='profileCard-avatar'>
            <FontAwesomeIcon icon={faCamera}/>
          </div>
          <div className='userFields'>
            <div className='name'>Nguyễn Văn A</div>
            <span className='username'>@NguyenVanA123</span>
          </div>
          <div className='stats'>
            <ul className='statlist'>
              <li className='stat'>
                  <span className='statLabel'>Tweet</span>
                  <span className='statValue'>0</span>
              </li>
              <li className='stat'>
                  <span className='statLabel'>Tweet</span>
                  <span className='statValue'>0</span>
              </li>
              <li className='stat'>
                  <span className='statLabel'>Tweet</span>
                  <span className='statValue'>0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSide;
