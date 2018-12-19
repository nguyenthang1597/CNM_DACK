import {API_URL} from '../Config'
import axios from 'axios'
const getName = (address) => {
  let url = `${API_URL}/detail/${address}/name`;
  return axios.get(url);
}

export default getName;
