import {API_URL} from '../Config'
import axios from 'axios'
const getAllUser = () => {
  let url = `${API_URL}/account/list`;
  return axios.get(url);
}

export default getAllUser;
