import React from 'react';
import Topbar from '../Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Profile from '../Profile'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/info' component={Profile}/>
    </React.Fragment>
  )
}

export default Home
