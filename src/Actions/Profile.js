import getAvatar from '../API/getAvatar'
import getName from '../API/getName'
import getAllInfo from '../API/getAllInfo';

export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_INFO = 'UPDATE_INFO';

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

export const updateAvatar = (Avatar) => ({type: UPDATE_AVATAR, Avatar})
export const updateInfo = (info) => ({type: UPDATE_AVATAR, info})
export const receiveInfo = (info) => ({type: RECEIVE_INFO, info})

const requestInfo = () => ({type: REQUEST_INFO});

export const getUserInfo = address => dispatch => {
  dispatch(requestInfo());
  return getAllInfo(address)
  .then(res => {
    dispatch(receiveInfo(res.data))
  })
}
