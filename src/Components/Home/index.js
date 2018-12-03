import React from 'react';
import Topbar from '../Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Profile from '../../Containers/Profile'
import Notification from '../Notification'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/notification' component={Notification}/>
    </React.Fragment>
  )
}

export default Home
