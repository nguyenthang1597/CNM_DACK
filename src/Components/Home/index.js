import React from 'react'
import Topbar from '../Topbar'
import Profile from '../Profile'
import Post from '../Post'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <div className="row">
      <Profile/>
      <Post className="col-md-6"/>
      </div>
    </React.Fragment>
  )
}

export default Home
