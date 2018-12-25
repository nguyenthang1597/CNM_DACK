import {connect} from 'react-redux';
import Home from '../Components/Home'
import {getUserInfo} from '../Actions/Profile'
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}}) => ({
  PublicKey,
  SecretKey
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: (address) => dispatch(getUserInfo(address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
