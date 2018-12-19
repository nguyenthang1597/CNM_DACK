import {API_URL} from '../Config'
import axios from 'axios'
const getAvatar = (address) => {
  let url = `${API_URL}/detail/${address}/avatar`;
  return axios.get(url);
}

export default getAvatar;
