import {connect} from 'react-redux';
import Topbar from '../Components/Topbar'
import {logOut} from '../Actions/Authenticate'
const mapStateToProps = ({Profile: {Avatar, Name}, Authenticate: {PublicKey}}) => ({Avatar, PublicKey, Name});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})


export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
