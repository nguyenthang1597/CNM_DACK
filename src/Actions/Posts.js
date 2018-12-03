export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_LOADMORE = 'RECEIVE_LOADMORE';


const requestPost = () => ({type: REQUEST_POST});
const receivePost = posts => ({type: RECEIVE_POST, posts});
const receiveError = () => ({type: RECEIVE_ERROR});
