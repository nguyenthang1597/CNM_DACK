import {connect} from 'react-redux';
import ListFollow from '../Components/ListFollow'
const mapStateToProps = ({Follow: {following}}) => ({following});


export default connect(mapStateToProps)(ListFollow);