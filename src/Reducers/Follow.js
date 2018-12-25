import {REQUEST_FOLLOW, RECEIVE_FOLLOW} from '../Actions/Follow'

const initState = {
  following: [],
  follower: [],
  loading: false
}

export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_FOLLOW:
      return {...state, loading: true}
    case RECEIVE_FOLLOW:
      return {...state, following: action.data.follow, follower: action.data.follower}
    default:
    return state;
  }
}
