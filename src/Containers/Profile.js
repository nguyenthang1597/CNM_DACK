import {connect} from 'react-redux';
import Profile from '../Components/Profile'
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}}) => ({PublicKey, SecretKey})
export default connect(mapStateToProps)(Profile);
