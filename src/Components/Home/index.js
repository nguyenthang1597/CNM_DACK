import React, { useEffect} from 'react';
import Topbar from '../../Containers/Topbar';
import {Route,}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Profile from '../../Containers/Profile'
import SendMoney from '../SendMoney'

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
      <Route path='/sendmoney' component={SendMoney}/>
      <Route path='/profile/:address' component={Profile}/>
    </React.Fragment>
  )
}

export default Home;
