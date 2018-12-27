import React from 'react'
import LeftSide from '../LeftSide'
import './Dashboard.css'
import InputNewPost from './InputNewPost'
import {connect} from 'react-redux'
import {  withRouter } from 'react-router-dom'
import ListPost from '../ListPost'
import explorePost from '../../API/explorePost'
import RightColumn from './RightColumn'
window.WebSocket = window.WebSocket || window.MozWebSocket;
var connection = new WebSocket('ws://localhost:8081');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      explore: [],
      page: 1,
      loadmore: false
    }
  }


  componentDidMount = async () => {
    const { page } = this.state;
    let res = await explorePost(this.props.PublicKey, page, 10);
    this.setState({ explore: res.data.Post })
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  reloadPost = async () => {
    let res = await explorePost(this.props.PublicKey, 1, 10);
    this.setState({ explore: res.data.Post, page: 1 })
  }
  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !this.state.loadmore) {
      this.setState({
        loadmore: true
      }, async () => {
        const {explore, page} = this.state;
        let res = await explorePost(this.props.PublicKey, page + 1, 10)
        if(res.data.Post.length){
          this.setState({
            explore: explore.concat(res.data.Post),
            page: page + 1,
            loadmore: false
          })
        }
      })
    }
  };
  render() {
    const {PublicKey, SecretKey, Profile} = this.props;
    const {explore} = this.state;
    return (
      <div className='grid'>
        <LeftSide/>
        <div>
          <InputNewPost PublicKey={PublicKey} SecretKey={SecretKey} reloadPost={this.reloadPost} />
          <ListPost connection={connection} posts={explore} PublicKey={PublicKey} SecretKey={SecretKey}/>
        </div>
        <RightColumn />
      </div>
    )
  }
}
const mapStateToProps = ({Profile}) => ({Profile})

export default withRouter(connect(mapStateToProps)(Dashboard));
