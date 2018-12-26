import getAllUser from '../API/getAllUser'
export const RECEIVE_USER = 'RECEIVE_USER';
export const REQUEST_USER = 'REQUEST_USER';

const receiveUser = data => ({type: RECEIVE_USER, data});

const requestUser = () => ({type: REQUEST_USER});

export const GetAllUser = () => dispatch => {
  dispatch(requestUser());
  return getAllUser()
  .then(res => {
    let data = res.data.Accounts;
    dispatch(receiveUser(data));
  })
}