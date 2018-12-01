import {combineReducers} from 'redux';

import Authenticate from './Authenticate'
import Posts from './Posts'
export default combineReducers({
  Authenticate,
  Posts
})
