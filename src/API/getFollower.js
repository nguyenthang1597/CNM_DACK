import {API_URL} from '../Config'
import axios from 'axios'
const getFollower = (address) => {
  let url = `${API_URL}/detail/${address}/follower`;
  return axios.get(url);
}

export default getFollower;
