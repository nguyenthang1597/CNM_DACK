import React from 'react'
import LeftSide from '../LeftSide'
import './Dashboard.css'
import InputNewPost from './InputNewPost'
import Post from '../Post'
import { Link, withRouter } from 'react-router-dom'
import ListPost from '../../Containers/ListPost'

const Dashboard = (props) => {
  return (
    <div className='grid'>
      <LeftSide />
      <div>
        <InputNewPost />
        <ListPost />
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

export default withRouter(Dashboard);
