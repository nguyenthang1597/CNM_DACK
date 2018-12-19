import { REQUEST_AUTH, SUCCESS_AUTH, FAILER_AUTH, LOGOUT } from '../Actions/Authenticate'

const initState = {
  isAuthenticating: false,
  isAuthenticated: false,
  PublicKey: null,
  SecretKey: null,
  hasError: false
}

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case REQUEST_AUTH:
      return { ...state, isAuthenticating: true }
    case SUCCESS_AUTH:
      return { ...state, isAuthenticated: true, isAuthenticating: false, PublicKey: action.data.PublicKey, SecretKey: action.data.SecretKey }
    case FAILER_AUTH:
      return { ...state, isAuthenticated: false, isAuthenticating: false, PublicKey: null, SecretKey: null }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        PublicKey: null,
        SecretKey: null,
        hasError: false,
      }
    default:
      return state;
  }
}
