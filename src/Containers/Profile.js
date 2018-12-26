import {connect} from 'react-redux';
import Profile from '../Components/Profile'
import { ChangeName, AddFollow, RemoveFollow } from '../Actions/Profile';
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}, Profile}) => ({MyProfile: Profile, PublicKey, SecretKey})
const mapDispatchToPros = (dispatch) => ({
    ChangeName: (newName) => {dispatch(ChangeName(newName))},
    AddFollow: (address) => dispatch(AddFollow(address)),
    RemoveFollow: (address) => dispatch(RemoveFollow(address)),
})
export default connect(mapStateToProps, mapDispatchToPros)(Profile);
