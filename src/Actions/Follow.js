import getFollow from '../API/getFollow'
import getFollower from '../API/getFollower'
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REQUEST_FOLLOW = 'REQUEST_FOLLOW';

const receiveFollow = data => ({type: RECEIVE_FOLLOW, data});


const requestFollow = () => ({type: REQUEST_FOLLOW});

export const GetFollow = (address) => dispatch => {
  dispatch(requestFollow());
  return Promise.all([getFollow(address), getFollower(address)])
  .then(res => {
    let data = {
      follow: res[0].data.Following,
      follower: res[1].data.Followers
    }
    dispatch(receiveFollow(data));
  })
}