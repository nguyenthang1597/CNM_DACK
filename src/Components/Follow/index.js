import React from 'react'
import Profile from '../../Containers/Profile';
import ListFollow from '../../Containers/FollowComponent'
import {Route} from 'react-router-dom'
const Follow = (props) => {
  return (
    <React.Fragment>
    <Profile/>
      <div className="follow">
        <ListFollow/>
      </div>
    </React.Fragment>
  )
}

export default Follow;
