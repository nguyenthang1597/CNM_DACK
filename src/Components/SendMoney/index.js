import React, { Component,useEffect,useState} from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sendmoney.css'

import _ from 'lodash'
import sendMoney from '../../Functions/payment'
import {connect} from 'react-redux';
import {GetAllUser} from '../../Actions/Account'
import getInfo from '../../API/getInfo'
class SendMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtMoney: 0,
            txtSearch: '',
            listPerson: [],
            page: 0,
            receiver: {
                avatarUrl: "",
                name: "",
                publicKey: '',
            },
            showReceiver: false
        }
    }
    loadAllUser(){
        const {getAllUser,users} = this.props
        getAllUser()
    }
    componentWillMount(){
        this.loadAllUser()
    }
    componentWillReceiveProps(props) {
        this.setState({
            listPerson: _.chunk(props.users, 6),
        })
    }
    handleInputMoneyChange = (e) => {
        this.setState({
            txtMoney: parseInt(e.target.value,10)
        });
    }

    handleBtnSendClick = async() => {
        const {PublicKey,SecretKey} = this.props
        const {receiver,txtMoney} = this.state
        try {
            await sendMoney(PublicKey,receiver.publicKey,txtMoney,SecretKey)
            alert("Chuyển tiền thành công")
        }catch(e) {
            alert("Chuyển tiền không thành công")
        }
    }

    handleBtnDeleteClick = () => {
        const _receiver = {
            avatarUrl: "",
            name: "",
            publicKey: "",
        }
        this.setState({
            showReceiver: false,
            receiver: _receiver
        })
    }

    handleBtnNextClick = () => {
        let length = this.state.listPerson.length;
        let _page = this.state.page;
        if (_page >= length - 1) {
            _page = 0;
        }
        else {
            _page++;
        }
        this.setState({
            page: _page
        })
    }

    handleBtnPrevClick = () => {
        let length = this.state.listPerson.length;
        let _page = this.state.page;
        if (_page === 0) {
            _page = length - 1;
        }
        else {
            _page--;
        }
        this.setState({
            page: _page
        })
    }

    handleBtnSearchClick = () => {
        let arr = this.props.users.filter(i=>i.Address.indexOf(this.state.txtSearch)>=0 )
        this.setState({
            listPerson: _.chunk(arr, 6),
            page: 0
        })
        
    }

    handleSearchChange = (e) => {
        this.setState({
            txtSearch: e.target.value,
            listPerson: _.chunk(this.props.users, 6),
        })
    }

    handleReceiverItemClick = (item, info) => {
        let _receiver = {
            avatarUrl: (info.Avatar.Avatar ==="") ? 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' :info.Avatar.Marker+info.Avatar.Avatar,
            name: info.Name,
            publicKey: item.Address,
        }
        this.setState({
            showReceiver: true,
            receiver: _receiver,
        })
    }

    render() {
        const {Profile,PublicKey} = this.props
        return (
            <div className="sendmoney-container">
                    <div className="left-column">

                        <div className="my-profile">
                            <img className="my-avatar" src={Profile.Avatar ? `data:image/jpeg;base64,${Profile.Avatar.Avatar}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'}></img>
                            <div className="my-infomation">
                                <p className="my-name">{Profile.Name}</p>
                                <p className="public-key">@{PublicKey}</p>
                                <div className="info-money">
                                    <p>Tiền: {Profile.Balance} TRE</p>
                                    <p>Năng lượng: {Math.ceil(Profile.Energy)} OXY</p>
                                </div>
                            </div>
                        </div>
                        {/* End profile */}

                        <div className="form-send-money">
                            <p className="money">Người nhận </p>
                            <div className="receiver-profile-container">
                                {this.state.showReceiver &&
                                    <div className="receiver-profile">
                                        <img className="receiver-avatar" src={this.state.receiver.avatarUrl}></img>
                                        <div className="receiver-infomation">
                                            <p className="receiver-name">{this.state.receiver.name}</p>
                                            <p className="receiver-public-key">@{this.state.receiver.publicKey}</p>
                                        </div>
                                        <button onClick={this.handleBtnDeleteClick} className="delete-receiver">Xóa</button>
                                    </div>}
                            </div>
                            <p className="money">Số tiền chuyển: </p>
                            <input onChange={this.handleInputMoneyChange} className="input-money" type='number'></input>
                            <div className="div-button">
                                <button onClick={this.handleBtnSendClick} className="btn-send">Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="search">
                            <input onChange={this.handleSearchChange} className='input-search' placeholder="Tìm kiếm ..." />
                            <button onClick={this.handleBtnSearchClick} className='btn-search'><FontAwesomeIcon icon={faSearch} /></button>
                        </div>

                        <div className="list-receiver-container">
                            {this.state.listPerson.length ===0 ? null : 
                            <div className="list-receiver">
                                {this.state.listPerson[this.state.page].map(item => (
                                    <ProfileForm item={item} click={this.handleReceiverItemClick}/>
                                ))}
                                {/* Item */}

                            </div>}
                            {/* Phan trang */}
                            <div className="next-prev">
                                <button onClick={this.handleBtnPrevClick}>Prev</button>
                                <button onClick={this.handleBtnNextClick}>Next</button>
                            </div>
                            {/* Phan Trang */}
                        </div>

                    </div>
            </div>

        );
    }
}
const ProfileForm = ({item,click}) => {
    let [info,setInfo]= useState()
    useEffect(() => {
        getInfo(item.Address).then(res=>setInfo(res.data))
      }, [item.Address])
    return (
    info ? 
    <div onClick={() => click(item, info)} className="receiver-item">
        <img src= {(info.Avatar.Avatar ==="") ? 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png': info.Avatar.Marker+info.Avatar.Avatar}></img>
        <div className="receiver-item-info">
            <div className='Name'>{info.Name}</div>
            <div className="Key">@{item.Address}</div>
        </div>
    </div>:null
    );
  };
  
const mapStateToProps = ({Profile, Authenticate: {PublicKey,SecretKey},Account:{users}}) => ({Profile,PublicKey, SecretKey,users})
const mapDispathToProps = dispatch => ({
  getAllUser:()=>dispatch(GetAllUser()),
})
export default connect(mapStateToProps, mapDispathToProps)(SendMoney);
