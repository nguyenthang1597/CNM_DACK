import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sendmoney.css'

import _ from 'lodash'



const LIST = [{ a: 1 }, { a: 5 }, { a: 5 }, { a: 1 }, { a: 2 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 7 }, { a: 1 }, { a: 1 }, { a: 5 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 5 }, { a: 1 }, { a: 6 }, { a: 1 }, { a: 9 }, { a: 1 }, { a: 7 }, { a: 1 }, { a: 1 }, { a: 1 },]

class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtMoney: "",
            txtSearch: '',
            listPerson: _.chunk(LIST, 6),
            page: 0,
            receiver: {
                avatarUrl: "",
                name: "",
                publicKey: '',
            },
            showReceiver: false
        }
    }

    handleInputMoneyChange = (e) => {
        this.setState({
            txtMoney: e.target.value
        });
    }

    handleBtnSendClick = () => {
        alert(this.state.txtMoney);
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
        alert(this.state.txtSearch)
    }

    handleSearchChange = (e) => {
        this.setState({
            txtSearch: e.target.value,
        })
    }

    handleReceiverItemClick = (item) => {
        let _receiver = {
            avatarUrl: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: item.a,
            publicKey: '@jjkajhskdljaslkjdklasjldkjasljdlaksdlka',
        }
        this.setState({
            showReceiver: true,
            receiver: _receiver,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="left-column">

                        <div className="my-profile">
                            <img className="my-avatar" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                            <div className="my-infomation">
                                <p className="my-name">Nguyen Van A</p>
                                <p className="public-key">dsjfhsdhjfhsdhfkhsdfjlsahfjhsakfhjkashfjhjshfdjkhafkhsdjkhfjkashfkl</p>
                                <div className="info-money">
                                    <p>Tong tien: 12121213</p>
                                    <p>Nang luong: 411213123</p>
                                </div>
                            </div>
                        </div>
                        {/* End profile */}

                        <div className="form-send-money">
                            <p className="money">So tien can chuyen: </p>
                            <input onChange={this.handleInputMoneyChange} className="input-money"></input>
                            <p className="money">Chuyen tien cho: </p>

                            <div className="receiver-profile-container">
                                {this.state.showReceiver &&
                                    <div className="receiver-profile">
                                        <img className="receiver-avatar" src={this.state.receiver.avatarUrl}></img>
                                        <div className="receiver-infomation">
                                            <p className="receiver-name">{this.state.receiver.name}</p>
                                            <p className="receiver-public-key">{this.state.receiver.publicKey}</p>
                                        </div>
                                        <button onClick={this.handleBtnDeleteClick} className="delete-receiver">Xoa</button>
                                    </div>}
                            </div>

                            <div className="div-button">
                                <button onClick={this.handleBtnSendClick} className="btn-send">Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="search">
                            <input onChange={this.handleSearchChange} className='input-search' placeholder="Tim kiem ..." />
                            <button onClick={this.handleBtnSearchClick} className='btn-search'><FontAwesomeIcon icon={faSearch} /></button>
                        </div>

                        <div className="list-receiver-container">
                            {/* List hien thi danh sach nhung nguoi co the chuyen tien */}
                            <div className="list-receiver">
                                {this.state.listPerson[this.state.page].map(item => (
                                    <div onClick={() =>this.handleReceiverItemClick(item)} className="receiver-item">
                                        <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                        <div className="receiver-item-info">
                                            <div className='Name'>{item.a}</div>
                                            <div className="Key">@ASKLJDLKJALKSJDLKJASLKDJLJASDJASJLD:</div>
                                        </div>
                                    </div>
                                ))}
                                {/* Item */}

                            </div>
                            {/* Phan trang */}
                            <div className="next-prev">
                                <button onClick={this.handleBtnPrevClick}>Prev</button>
                                <button onClick={this.handleBtnNextClick}>Next</button>
                            </div>
                            {/* Phan Trang */}
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SendMoney;
