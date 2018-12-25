import {sign} from '../lib/transaction'
import axios from 'axios'
import {API_URL} from '../Config'
export default async (account, operation, params, secret) => {
  console.log(params)
  let a = await axios.post(`${API_URL}/tx/unsignedhash`, {
    account,
    operation,
    params
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  let tx = a.data.tx;
  sign(tx, secret, a.data.UnsignedHash);
  let _newTx = {
    ...tx,
    params: params
  }
  console.log(_newTx)
  return await axios.post(`${API_URL}/tx/sendtx`, {
    tx: _newTx
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
