import {connect} from 'react-redux';
import ListPost from '../Components/ListPost'
const mapStateToProps = ({Posts: {posts}}) => ({posts});


export default connect(mapStateToProps)(ListPost);
