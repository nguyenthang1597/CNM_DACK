import {connect} from 'react-redux';
import Profile from '../Components/Profile'
import { ChangeName } from '../Actions/Profile';
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}, Profile}) => ({MyProfile: Profile, PublicKey, SecretKey})
const mapDispatchToPros = (dispatch) => ({
    ChangeName: (newName) => {dispatch(ChangeName(newName))}
})
export default connect(mapStateToProps, mapDispatchToPros)(Profile);
