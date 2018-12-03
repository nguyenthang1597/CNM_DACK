import React from 'react'
import './InputNewPost.css'

const InputNewPost = (props) => {
  return (
    <div className='box'>
      <div className='box-avatar'>
          <img className='box-avatar-img' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
      </div>
      <input className='inputNewPost'/>
    </div>
  )
}

export default InputNewPost;
