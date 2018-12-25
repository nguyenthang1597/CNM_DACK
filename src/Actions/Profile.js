import getAvatar from '../API/getAvatar'
import getName from '../API/getName'

export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_INFO = 'UPDATE_INFO';

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

export const updateAvatar = (Avatar) => ({type: UPDATE_AVATAR, Avatar})
export const updateInfo = (info) => ({type: UPDATE_AVATAR, info})
export const receiveInfo = (info) => ({type: RECEIVE_INFO, info})

const requestInfo = () => ({type: REQUEST_INFO});

export const getInfo = address => dispatch => {
  dispatch(requestInfo());
  let array = [getName(address), getAvatar(address)];
  return Promise.all(array)
  .then(res => {
    let info = {
      Name: res[0].data.Name,
      Avatar: res[1].data.Marker + res[1].data.Avatar
    }
    dispatch(receiveInfo(info))
  })
}
