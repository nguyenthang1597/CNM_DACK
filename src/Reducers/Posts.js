import {REQUEST_POST,RECEIVE_POST, RECEIVE_ERROR, RECEIVE_LOADMORE} from '../Actions/Posts'


const initState = {
  loading: false,
  error:false,
  loadmore: false,
  posts: [],
  page: 1,
  perpage: 10,
  pages: null
}

export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_POST:
      return {
        ...state, loading: true
      }
    case RECEIVE_POST:
      return {
        ...state,
        loading: false,
        posts: action.posts.data,
        perpage: action.posts.perpage,
        pages: action.posts.pages
      }
    case RECEIVE_ERROR:
      return {
        ...state, error: true
      }
    default:
    return state;
  }
}
