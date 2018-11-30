import {connect} from 'react-redux';
import UnAuthenticateComponent from '../Components/UnAuthenticateComponent'
const mapStateToProps = ({Authenticate: {isAuthenticated}}) => ({
  isAuthenticated
})

export default connect(mapStateToProps)(UnAuthenticateComponent);
