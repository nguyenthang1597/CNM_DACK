import {API_URL} from '../Config'
import axios from 'axios'
const Login = (publickey) => {
  let url = `${API_URL}/login`;
  return axios.post(url, {
    PublicKey: publickey
  });
}

export default Login;
