import getAvatar from '../API/getAvatar'
import getName from '../API/getName'
import GetInfo from '../API/getInfo'
export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_INFO = 'UPDATE_INFO';

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

export const updateAvatar = (Avatar) => ({type: UPDATE_AVATAR, Avatar})
export const updateInfo = (info) => ({type: UPDATE_INFO, info})
export const receiveInfo = (info) => ({type: RECEIVE_INFO, info})

const requestInfo = () => ({type: REQUEST_INFO});

export const getInfo = address => dispatch => {
  dispatch(requestInfo());
  return GetInfo(address)
  .then(res => {
    let info = {
      Name: res.data.Name,
      Avatar: res.data.Avatar.Marker + res.data.Avatar.Avatar,
      Sequence: res.data.Sequence,
      Energy: res.data.Energy,
      Balance: res.data.Balance
    }
    dispatch(receiveInfo(info))
  })
}
