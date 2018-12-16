import Login from '../API/login'
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILER_AUTH = 'FAILER_AUTH';

const requestAuth = () => ({type: REQUEST_AUTH})

const successAuth = (data) => ({type: SUCCESS_AUTH, data})

const failerAuth = () => ({type: FAILER_AUTH})

export const authenticate = (PublicKey, SecretKey) => dispatch => {
  dispatch(requestAuth());
  return Login(PublicKey)
  .then(res => dispatch(successAuth({PublicKey, SecretKey})))
  .catch(e => dispatch(failerAuth()))
}
