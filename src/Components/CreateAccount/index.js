import React from 'react'
import './create.css'
import makeTx from '../../Functions/makeTx'
import useFormInput from '../../Functions/useFormInput'
import {connect} from 'react-redux';
const Create = ({PublicKey,SecretKey}) => {
    let publickey = useFormInput()
    let handlebtnClick = async()=>{
        const Params = {
            address: publickey.value,
          }
          try {
            await makeTx(PublicKey, 'create_account', Params, SecretKey);
            alert("Tạo tài khoản thành công")
          } catch (error) {
            alert('Tạo tài khoản không thành công')
          }
        }
  return (
    <div className="container">
        <h2 className="title">Tạo tài khoản</h2>
        <input placeholder="Nhập PublicKey"  {...publickey} className="publicKey"/>
        <button onClick={()=>handlebtnClick()} className="btnCreate">Tạo tài khoản</button>
    </div>
  )
}
const mapStateToProps = ({Authenticate: {PublicKey, SecretKey}}) => ({PublicKey, SecretKey})
const mapDispatchToPros = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToPros)(Create);
