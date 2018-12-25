import {connect} from 'react-redux';
import {authenticate} from '../Actions/Authenticate';
import Login from '../Components/Login'

const mapStateToProps = ({Authenticate: {isAuthenticating}}) => ({
  isAuthenticating
})

const mapDispatchToProps = dispatch => ({
  authenticate: (secretkey) => dispatch(authenticate(secretkey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
