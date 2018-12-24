import React from 'react';
import Topbar from '../../Containers/Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Follow from '../Follow'
import Profile from '../../Containers/Profile'
import SendMoney from '../SendMoney'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/notification' component={Notification}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/sendmoney' component={SendMoney}/>
    </React.Fragment>
  )
}

export default Home
