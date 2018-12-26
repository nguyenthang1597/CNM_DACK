import {API_URL} from '../Config'
import Axios from 'axios';
const getAllPost = (address, page, perpage) => {
  let url = `${API_URL}/detail/${address}/list?page=${page}&perpage=${perpage}`;
  return Axios.get(url)
}

export default getAllPost;
