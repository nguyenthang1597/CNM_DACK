import getAllPost from '../API/getAllPost';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_LOADMORE = 'RECEIVE_LOADMORE';


const requestPost = () => ({type: REQUEST_POST});
const receivePost = posts => ({type: RECEIVE_POST, posts});
const receiveError = () => ({type: RECEIVE_ERROR});


export const getPosts = (address, page, perpage) => dispatch => {
  dispatch(requestPost());
  return getAllPost(address,page,perpage).then(res => {
    if(res.status !== 200)
      return dispatch(receiveError());
    else
      return res.json();
  }).then(data => {
    dispatch(receivePost(data));
  })
}
