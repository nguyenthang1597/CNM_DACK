import {connect} from 'react-redux';
import Profile from '../Components/Profile'
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}, Profile}) => ({MyProfile: Profile, PublicKey, SecretKey})
export default connect(mapStateToProps)(Profile);
