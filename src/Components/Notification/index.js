import React from 'react'
import './Notification.css'
const Notification = (props) => {
  return (
    <div className='notiContainer'>
      <Noti content='Thông báo #1' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #2' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #3' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #4' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #5' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #6' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #7' date='1/12/2018'/>
      <div className='divider'/>
      <Noti content='Thông báo #8' date='1/12/2018'/>
      <div className='divider'/>
    </div>
  )
}

const Noti = ({content, date, image}) => {
  return (
    <div className='notification'>
      <div className='notiImg'></div>
      <div className='notiContent'>{content} <span className='postAt'>{date}</span></div>

    </div>
  )
}



export default Notification;
