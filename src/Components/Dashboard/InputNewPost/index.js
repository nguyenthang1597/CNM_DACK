import React  from 'react'
import './InputNewPost.css'
import useFormInput from '../../../Functions/useFormInput'
import post from '../../../Functions/post'
import {connect} from 'react-redux'
const InputNewPost = (props) => {
  let text = useFormInput();
  async function sendPost(){
    try {
      if (text.value.length === 0){
        alert("Bạn phải nhập nội dung bài viết!")
        return 
      }
      let res = await post(props.PublicKey, text.value, props.SecretKey)
      alert('Thành công')
    } catch (error) {
      alert('Thất bại')
      
    }
    
  }

  return (
    <div className='box'>
      <div className='box-avatar'>
          <img className='box-avatar-img' src={props.Avatar ? `data:image/png;base64,${props.Avatar.Avatar}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar'/>
      </div>
      <input className='inputNewPost' {...text}/>
      <button onClick={() => {
        sendPost()
        text.setValue('')
      }}>Đăng</button>
    </div>
  )
}

const mapStateToProps = ({Profile: {Avatar}}) => ({Avatar})
export default connect(mapStateToProps)(InputNewPost);
