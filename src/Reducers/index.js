import {combineReducers} from 'redux';

import Authenticate from './Authenticate'
import Posts from './Posts'
import Profile from './Profile'
import Follow from './Follow'
export default combineReducers({
  Authenticate,
  Posts,
  Profile,
  Follow
})
