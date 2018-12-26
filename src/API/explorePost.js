import {API_URL} from '../Config'
import axios from 'axios'
const explorePost = (address, page, perpage) => {
  let url = `${API_URL}/post/${address}/explore?page=${page}&perpage=${perpage}`;
  
  return axios.get(url)
}

export default explorePost;
