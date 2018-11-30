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

const store = createStore(Reducers, applyMiddleware(thunk));


const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <UnAuthenticateComponent exact path='/login' component={Login}/>
          <AuthenticateComponent exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
