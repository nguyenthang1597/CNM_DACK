import React from 'react'
import Topbar from '../Topbar'
const Home = (props) => {
  document.title = 'Home'
  return (
    <React.Fragment>
      <Topbar/>
      <div>home</div>
    </React.Fragment>
  )
}

export default Home
