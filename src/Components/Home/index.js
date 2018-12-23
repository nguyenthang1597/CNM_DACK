import React, {useEffect} from 'react';
import Topbar from '../../Containers/Topbar';
import {Switch, Route, BrowserRouter}  from 'react-router-dom';
import Dashboard from '../Dashboard'
import Notification from '../Notification'
import Profile from '../../Containers/Profile'

import makeTx from '../../Functions/makeTx'

const Home = ({PublicKey, getInfo, getFollow}) => {



  document.title = 'Home'
  useEffect(() => {
    getInfo(PublicKey);
    getFollow(PublicKey)
    makeTx('GAJQ47RMDTXYTCBMMW4A4DUMTB5RQLTGQZDMMABW6RTQJGKINJ4JTRTP', 'payment', {address: 'GDFNYQOHLZEHUQTUHWB4IH34QXXB6YEXJT5UFKM4O2D3CFGFWEQS4EB4', amount: 10}, 'SARDDYAEVEABQTGOZEDOI454XUBXCF5LMNDX6Q3MGFZ53MONF2XDDQIU')
  }, [getInfo, getFollow, makeTx])
  return (
    <React.Fragment>
      <Topbar/>
      {/* <Route exact path='/' render={props => <Dashboard {...props} PublicKey={PublicKey}/>} />
      <Route exact path='/notification' component={Notification}/>
      <Route path='/profile' component={Profile}/> */}
    </React.Fragment>
  )
}

export default Home
