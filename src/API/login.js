import {API_URL} from '../Config'
import axios from 'axios'
import {Keypair} from 'stellar-base'
const Login = (secretkey) => {
  let url = `${API_URL}/login`;
  try {
    let key = Keypair.fromSecret(secretkey);
    let publickey = key.publicKey();
    return axios.post(url, {
      publickey,
    });
  } catch (error) {
    throw error;
  }
}

export default Login;
