export const REQUEST_AUTH = 'REQUEST_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILER_AUTH = 'FAILER_AUTH';

const requestAuth = () => ({type: REQUEST_AUTH})

const successAuth = (data) => ({type: SUCCESS_AUTH, data})


export const authenticate = data => dispatch => {
  dispatch(requestAuth());
  return setTimeout(() => dispatch(successAuth()), 1000);
}
