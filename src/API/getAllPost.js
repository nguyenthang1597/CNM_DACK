import {API_URL} from '../Config'
const getAllPost = (address, page, perpage) => {
  let url = `${API_URL}/detail/${address}/list?page=${page}&perpage=${perpage}`;
  console.log(url);
  return fetch(url)
}

export default getAllPost;
