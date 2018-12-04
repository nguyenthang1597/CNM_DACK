import React from 'react';
import Topbar from '../Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Follow from '../Follow'
import Profile from '../../Containers/Profile'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/following' component={Follow}/>
      <Route exact path='/follower' component={Follow}/>
    </React.Fragment>
  )
}

export default Home
