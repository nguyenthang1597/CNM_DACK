import {connect} from 'react-redux';

import Topbar from '../Components/Topbar'

const mapStateToProps = ({Profile: {Avatar}}) => ({Avatar});

export default connect(mapStateToProps)(Topbar);
