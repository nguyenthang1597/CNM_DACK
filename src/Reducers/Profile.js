import {UPDATE_INFO, UPDATE_AVATAR,REQUEST_INFO, RECEIVE_INFO} from '../Actions/Profile'

const initState = {
  Name: '',
  Balance: '',
  Sequence: '',
  Avatar: null,
  Energy: null,
  Followers: [],
  Following: [],
  loading: false
}


export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_INFO:
      return {...state, loading: true}
    case RECEIVE_INFO:
      return {...state, loading: false, ...action.info}
    default:
      return state;
  }
}
