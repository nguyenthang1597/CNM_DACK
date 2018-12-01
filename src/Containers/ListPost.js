import {connect} from 'react-redux';
import ListPost from '../Components/ListPost'
const mapStateToProps = ({Posts}) => ({Posts});


export default connect(mapStateToProps)(ListPost);
