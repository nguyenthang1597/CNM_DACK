import {UPDATE_INFO, UPDATE_AVATAR,REQUEST_INFO, RECEIVE_INFO} from '../Actions/Profile'

const initState = {
  Name: '',
  Avatar: '',
  Sequence: 0,
  Balance: 0,
  Energy: 0,
  loading: false
}


export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_INFO:
      return {...state, loading: true}
    case RECEIVE_INFO:
      return {...state, 
        loading: false, 
        Name: action.info.Name, 
        Avatar: action.info.Avatar,
        Sequence: action.info.Sequence,
        Energy: action.info.Energy,
        Balance: action.info.Balance
      }
    default:
      return state;
  }
}
