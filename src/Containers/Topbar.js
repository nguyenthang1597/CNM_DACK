import {connect} from 'react-redux';
import Topbar from '../Components/Topbar'
import {getInfo} from '../Actions/Profile'
const mapStateToProps = ({Profile: {Avatar, Name}, Authenticate: {PublicKey}}) => ({Avatar, Name, Username: PublicKey});

const mapDispatchToProps = dispatch => ({
  getInfo: address => dispatch(getInfo(address))
})
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
