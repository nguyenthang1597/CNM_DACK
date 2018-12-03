import {connect} from 'react-redux';
import Profile from '../Components/Profile'
const mapStateToProps = ({Profile}) => ({Profile})

export default connect(mapStateToProps)(Profile);
