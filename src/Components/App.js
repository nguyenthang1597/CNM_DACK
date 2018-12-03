import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AuthenticateComponent from '../Containers/AuthenticateComponent';
import UnAuthenticateComponent from '../Containers/UnAuthenticateComponent';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducers from '../Reducers'
import thunk from 'redux-thunk'
import Login from '../Containers/Login'
import Home from './Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Topbar from './Topbar'
import Following from './Following'
library.add(faStroopwafel)

const store = createStore(Reducers, applyMiddleware(thunk));


const App = (props) => {
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
