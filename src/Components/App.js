import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AuthenticateComponent from '../Containers/AuthenticateComponent';
import UnAuthenticateComponent from '../Containers/UnAuthenticateComponent';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import Reducers from '../Reducers'
import thunk from 'redux-thunk'
import Login from '../Containers/Login'
import Home from '../Containers/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Topbar from './Topbar'
import Following from './Following'
import {Keypair} from 'stellar-base'
import {successAuth} from '../Actions/Authenticate'
library.add(faStroopwafel)
const logger = createLogger();
const store = createStore(Reducers, applyMiddleware(thunk));


const App = (props) => {
  let SecretKey = localStorage.getItem('key');
  if(SecretKey){
    let buffer = new Buffer(SecretKey, 'hex');
    SecretKey = buffer.toString('base64');
    const key = Keypair.fromSecret(SecretKey);
    let PublicKey = key.publicKey();
    store.dispatch(successAuth({PublicKey, SecretKey}))
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <UnAuthenticateComponent exact path='/login' component={Login}/>
            <AuthenticateComponent path='/' component={Home}/>
          </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
