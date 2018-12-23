import getSequence from '../API/getSequence';
import {sign, encode} from '../lib/transaction'
import axios from 'axios'
import {API_URL} from '../Config'
export default async (account, operation, params, secret) => {
  let a = await axios.post(`${API_URL}/tx/unsignedhash`, {
    account,
    operation,
    params
  })
  let tx = a.data.tx;
  sign(tx, secret, a.data.UnsignedHash);
  let b = await axios.post(`${API_URL}/tx/sendtx`, {
    tx
  })
}
