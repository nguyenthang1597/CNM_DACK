import React, {useState, useEffect} from 'react';
import Topbar from '../../Containers/Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Profile from '../../Containers/Profile'


const Home = ({PublicKey, SecretKey, getUserInfo}) => {
  document.title = 'Home'

    
  useEffect(() => {
    getUserInfo(PublicKey)
  }, [getUserInfo])
  return (
    <React.Fragment>
      <Topbar PublicKey={PublicKey}/>
      <Route exact path='/' render={props => <Dashboard {...props} PublicKey={PublicKey} SecretKey={SecretKey}/>} />
      <Route exact path='/notification' component={Notification}/>
      <Route path='/profile/:address' component={Profile}/>
    </React.Fragment>
  )
}

export default Home;
