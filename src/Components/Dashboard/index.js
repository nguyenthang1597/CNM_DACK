import React, { useState, useEffect } from 'react'
import LeftSide from '../LeftSide'
import './Dashboard.css'
import InputNewPost from './InputNewPost'
import Post from '../Post'
import { Link, withRouter } from 'react-router-dom'
import ListPost from '../ListPost'
import explorePost from '../../API/explorePost'

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
    let res = await explorePost(this.props.PublicKey, page, 20);
    this.setState({ explore: res.data.Post })

    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
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
        let res = await explorePost(this.props.PublicKey, page + 1, 20)
        console.log(res)
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
    console.log(`explore ${this.state.page}`, explore)
    return (
      <div className='grid'>
        <LeftSide Profile={Profile}/>
        <div>
          <InputNewPost PublicKey={PublicKey} SecretKey={SecretKey} />
          <ListPost posts={explore} />
        </div>
        <div className={"rightColumn"}>
          <div className={"right-colum-title"}>
            <span>Đề nghị</span>
            <span className={'title-link'}> Tải lại</span>
            <span className={'title-link'}> Xem tất cả</span>
          </div>
          {/*  */}
          <div className="info-orther-people">
            <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            <div className="information">
              <p>Tên người kia</p>
              <button>Theo dõi</button>
            </div>
          </div>
          {/* End info other people */}

          <div className="info-orther-people">
            <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            <div className="information">
              <p>Tên người kia</p>
              <button>Theo dõi</button>
            </div>
          </div>

          <div className="info-orther-people">
            <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            <div className="information">
              <p>Tên người kia</p>
              <button>Theo dõi</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}





// const Dashboard = ({ PublicKey, SecretKey }) => {
//   let [explore, setExplore] = useState([]);
//   let [page, setPage] = useState(1);
//   let [loadmore, setLoadmore] = useState(true);
//   useEffect(() => {
//     explorePost(PublicKey, page, 20).then(res => {
//       setExplore(res.data.Post);
//       setLoadmore(false)
//     })
//     window.addEventListener("scroll", handleScroll());
//     // return function clean(){
//     //   window.removeEventListener("scroll", handleScroll);
//     // }
//   }, [explorePost]);




// }

export default withRouter(Dashboard);
