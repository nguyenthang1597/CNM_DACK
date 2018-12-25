import {API_URL} from '../Config'
import axios from 'axios'
const getSequence = (address) => {
  let url = `${API_URL}/detail/${address}/sequence`;
  return axios.get(url);
}

export default getSequence;