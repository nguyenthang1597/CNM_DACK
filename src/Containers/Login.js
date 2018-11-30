import {connect} from 'react-redux';
import {authenticate} from '../Actions/Authenticate';
import Login from '../Components/Login'

const mapStateToProps = ({Authenticate: {isAuthenticating}}) => ({
  isAuthenticating
})

const mapDispatchToProps = dispatch => ({
  authenticate: (data) => dispatch(authenticate(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
