import {API_URL} from '../Config'
import axios from 'axios'
const Login = (publickey, secretkey) => {
  let url = `${API_URL}/login`;
  return axios.post(url, {
    PublicKey: publickey,
    SecretKey: secretkey
  });
}

export default Login;
