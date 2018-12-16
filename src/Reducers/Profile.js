import {UPDATE_INFO, UPDATE_AVATAR,REQUEST_INFO, RECEIVE_INFO} from '../Actions/Profile'

const initState = {
  Name: '',
  Avatar: '',
  loading: false
}


export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_INFO:
      return {...state, loading: true}
    case RECEIVE_INFO:
      return {...state, loading: false, Name: action.info.Name, Avatar: action.info.Avatar}
    default:
      return state;
  }
}
