import {API_URL} from '../Config'
import axios from 'axios'
const getCommentReaction = (hash) => {
  let url = `${API_URL}/post/${hash}`;
  return axios.get(url);
}

export default getCommentReaction;
