import {connect} from 'react-redux';
import AuthenticateComponent from '../Components/AuthenticateComponent'
const mapStateToProps = ({Authenticate: {isAuthenticated}}) => ({
  isAuthenticated
})

export default connect(mapStateToProps)(AuthenticateComponent);
