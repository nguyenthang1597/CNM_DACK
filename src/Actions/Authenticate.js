import Login from '../API/login'
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAILER_AUTH = 'FAILER_AUTH';
export const LOGOUT = "LOGOUT"

const requestAuth = () => ({ type: REQUEST_AUTH })

const successAuth = (data) => ({ type: SUCCESS_AUTH, data })

const failerAuth = () => ({ type: FAILER_AUTH })

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  })
}

export const authenticate = (SecretKey) => dispatch => {
  dispatch(requestAuth());
  return Login(SecretKey)
    .then(res => {
      if (res.status === 200) {
        dispatch(successAuth({ PublicKey: res.data.PublicKey, SecretKey }))
      }
      else {
        dispatch(failerAuth())
      }
    })
    .catch(e => dispatch(failerAuth()))
}
