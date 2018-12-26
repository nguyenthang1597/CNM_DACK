import {RECEIVE_USER,REQUEST_USER} from '../Actions/Account'

const initState = {
  users: [],
  loading: false
}

export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_USER:
      return {...state, loading: true}
    case RECEIVE_USER:{
      return {...state, users: action.data}
    }
    default:
    return state;
  }
}
