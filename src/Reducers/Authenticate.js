import {REQUEST_AUTH, SUCCESS_AUTH, FAILER_AUTH} from '../Actions/Authenticate'

const initState = {
  isAuthenticating: false,
  isAuthenticated: true,
  token: null,
  error: null
}

export default (state = initState, action) => {
  switch(action.type){
    case REQUEST_AUTH:
      return {...state, isAuthenticating: true}
    case SUCCESS_AUTH:
      return {...state, isAuthenticated: true, isAuthenticating: false, token: action.token}
    case FAILER_AUTH:
      return {...state, isAuthenticated: false, isAuthenticating: false, token: null}
    default:
      return state;
  }
}
