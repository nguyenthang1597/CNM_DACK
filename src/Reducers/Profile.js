import {
  UPDATE_INFO,
  UPDATE_AVATAR,
  REQUEST_INFO,
  RECEIVE_INFO,
  ADD_FOLLOW,
  REMOVE_FOLLOW
} from '../Actions/Profile';

const initState = {
  Name: '',
  Balance: '',
  Sequence: '',
  Avatar: null,
  Energy: null,
  Followers: [],
  Following: [],
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_INFO:
      return {...state, loading: true};
    case RECEIVE_INFO:
      return {...state, loading: false, ...action.info};
    case ADD_FOLLOW:
      return {...state, Following: [...state.Following, action.newFollow]};
    case REMOVE_FOLLOW:
      return {
        ...state,
        Following: state.Following.filter (e => e !== action.follower),
      };
    default:
      return state;
  }
};
