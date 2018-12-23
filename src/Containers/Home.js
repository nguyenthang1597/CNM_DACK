import {connect} from 'react-redux';
import Home from '../Components/Home'
import {getInfo} from '../Actions/Profile'
import {GetFollow} from '../Actions/Follow'
const mapStateToProps = ({Authenticate: {PublicKey}}) => ({
  PublicKey
})

const mapDispatchToProps = dispatch => ({
  getInfo: (address) => dispatch(getInfo(address)),
  getFollow: (address) => dispatch(GetFollow(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
