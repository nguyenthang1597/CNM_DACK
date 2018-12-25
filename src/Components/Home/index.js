import React, {useEffect} from 'react';
import Topbar from '../../Containers/Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Profile from '../../Containers/Profile'
import SendMoney from '../SendMoney'

import Test from '../test'
import updateName from '../../Functions/updateName'

const Home = ({PublicKey, getInfo, getFollow, SecretKey,Avatar}) => {
  document.title = 'Home'
  useEffect(() => {
    getInfo(PublicKey)
    getFollow(PublicKey)
  }, [getInfo, getFollow])
  return (
    <React.Fragment>
      <Test/>
      <Topbar/>
      <Route exact path='/' render={props => <Dashboard {...props} PublicKey={PublicKey} SecretKey={SecretKey} Avatar={Avatar}/>}/>
      <Route exact path='/notification' component={Notification}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/sendmoney' component={SendMoney}/>
    </React.Fragment>
  )
}

export default Home
