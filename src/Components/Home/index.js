import React from 'react'
import Topbar from '../Topbar'
import Profile from '../Profile'
import Post from '../Post'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <div style={{display: "flex"}}>
      <Profile/>
      <Post/>
      </div>
    </React.Fragment>
  )
}

export default Home
