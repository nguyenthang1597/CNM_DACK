import { sha256 } from 'js-sha256';
import Login from '../API/login'
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILER_AUTH = 'FAILER_AUTH';
export const LOGOUT = "LOGOUT"
const requestAuth = () => ({ type: REQUEST_AUTH })

export const successAuth = (data) => ({ type: SUCCESS_AUTH, data })

const failerAuth = () => ({ type: FAILER_AUTH })

export const logOut = () => (dispatch) => {
  localStorage.clear()
  dispatch({
    type: LOGOUT
  })
}

export const authenticate =  (SecretKey) =>async dispatch => {
  dispatch(requestAuth());
  try {
    let res = await Login(SecretKey);
    if(res.status === 200) {
      let buffer = new Buffer(SecretKey, 'base64');
      let hash = buffer.toString('hex');
      localStorage.setItem("key", hash)
      dispatch(successAuth({PublicKey: res.data.PublicKey, SecretKey}))
    }
    else {
      dispatch(failerAuth())
    }
  } catch (error) {
    dispatch(failerAuth())
  }
}
