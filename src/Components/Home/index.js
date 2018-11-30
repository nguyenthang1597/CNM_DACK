import React from 'react'
import Topbar from '../Topbar'
import Profile from '../Profile'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <Profile/>
    </React.Fragment>
  )
}

export default Home
