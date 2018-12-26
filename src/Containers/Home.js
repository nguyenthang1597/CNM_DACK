import { connect } from 'react-redux';
import Home from '../Components/Home'
import { getUserInfo } from '../Actions/Profile'

const mapStateToProps = ({ Profile: { Avatar }, Authenticate: { PublicKey, SecretKey } }) => ({
  Avatar,
  PublicKey,
  SecretKey,
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: (address) => dispatch(getUserInfo(address)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
