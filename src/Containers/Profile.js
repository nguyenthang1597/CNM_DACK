import {connect} from 'react-redux';
import Profile from '../Components/Profile'
import {getPosts} from '../Actions/Posts'
import {getInfo} from '../Actions/Profile'
const mapStateToProps = ({Profile, Posts}) => ({Profile, Posts})
const mapDispathToProps = dispatch => ({
  getPosts: (address,page,perpage) => dispatch(getPosts(address,page,perpage)),
  getInfo: (address) => dispatch(getInfo(address))
})
export default connect(mapStateToProps, mapDispathToProps)(Profile);
