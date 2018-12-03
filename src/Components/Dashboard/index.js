import React from 'react'
import LeftSide from '../LeftSide'
import './Dashboard.css'
import InputNewPost from './InputNewPost'
import Post from '../Post'
import ListPost from '../../Containers/ListPost'

const Dashboard = (props) => {
  return (
    <div className='grid'>
      <LeftSide/>
      <div>
        <InputNewPost/>
        <ListPost/>
      </div>
      <div style={{backgroundColor: 'blue', height: 100}}>chưa biết bỏ gì vô</div>
    </div>
  )
}

export default Dashboard;
