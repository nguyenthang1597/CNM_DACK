import {API_URL} from '../Config'
import axios from 'axios'
const getAllInfo = (address) => {
  let url = `${API_URL}/detail/${address}/info`;
  return axios.get(url);
}

export default getAllInfo;
