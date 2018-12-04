import {connect} from 'react-redux';
import ListFollow from '../Components/ListFollow'
const mapStateToProps = ({Follow: {follow}}) => ({follow});


export default connect(mapStateToProps)(ListFollow);