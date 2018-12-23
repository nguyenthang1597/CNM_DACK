import React, {useEffect} from 'react';
import Topbar from '../../Containers/Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Follow from '../Follow'
import Profile from '../../Containers/Profile'
const Home = ({PublicKey, getInfo, getFollow}) => {
  document.title = 'Home'
  useEffect(() => {
    getInfo(PublicKey);
    getFollow(PublicKey)
  }, [getInfo, getFollow])
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path='/' render={props => <Dashboard {...props} PublicKey={PublicKey}/>} />
      <Route exact path='/notification' component={Notification}/>
      <Route path='/profile' component={Profile}/>

    </React.Fragment>
  )
}

export default Home
