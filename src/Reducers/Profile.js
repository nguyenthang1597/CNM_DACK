import {
  UPDATE_INFO,
  UPDATE_AVATAR,
  REQUEST_INFO,
  RECEIVE_INFO,
  ADD_FOLLOW,
  REMOVE_FOLLOW,
  CHANGE_NAME
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
      return { ...state, loading: true };
    case RECEIVE_INFO:
      return { ...state, loading: false, ...action.info };
    case ADD_FOLLOW:
      return { ...state, Following: [...state.Following, action.newFollow] };
      case UPDATE_AVATAR:
      return {...state, Avatar: {Avatar: action.Avatar}}
    case REMOVE_FOLLOW:
      return {
        ...state,
        Following: state.Following.filter(e => e !== action.follower),
      };
    case CHANGE_NAME:
      return {
        ...state,
        Name: action.newName,
      }
    default:
      return state;
  }
};
