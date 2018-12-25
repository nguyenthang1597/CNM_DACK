import {API_URL} from '../Config'
import axios from 'axios'
const getEnergy = (address) => {
  let url = `${API_URL}/detail/${address}/energy`;
  return axios.get(url);
}

export default getEnergy;
