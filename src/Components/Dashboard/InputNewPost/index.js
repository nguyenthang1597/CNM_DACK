import React, {useState} from 'react'
import './InputNewPost.css'
import useFormInput from '../../../Functions/useFormInput'
import post from '../../../Functions/post'
const InputNewPost = (props) => {
  let text = useFormInput();

  async function sendPost(){
    try {
      if(text.value === '')
        return;
      let res = await post(props.PublicKey, text.value, props.SecretKey)
      alert('Thành công')
    } catch (error) {
      alert('Thất bại')
      console.log(error);
      
    }
    
  }

  return (
    <div className='box'>
      <div className='box-avatar'>
          <img className='box-avatar-img' src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt='avatar'/>
      </div>
      <input className='inputNewPost' {...text}/>
      <button onClick={() => {
        // sendPost()
        text.setValue('')
      }}>Đăng</button>
    </div>
  )
}

export default InputNewPost;
