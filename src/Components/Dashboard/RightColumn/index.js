import React, { Component } from 'react';
import '../Dashboard.css'
import { GetAllUser } from '../../../Actions/Account';
import { connect } from 'react-redux'
import _ from 'lodash'
import Item from './Item'
import {AddFollow, RemoveFollow} from '../../../Actions/Profile'
import Search from './Search'

class RightColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: [[]],
            page: 0,
            txtFind: ''
        }
    }

    componentWillMount() {
        this.props.GetAllUser();
    }

    componentWillReceiveProps(props) {
        this.setState({
            listUser: _.chunk(props.listUser, 4),
        })
    }

    handleBtnPrevClick = () => {
        let _page = this.state.page 
        if( _page <= 0 ) {
            _page = this.state.listUser.length -1;
        }
        else {
            _page--;
        }
        this.setState({
            page: _page
        })
    }

    handleBtnNextClick = () => {
        let _page = this.state.page 
        if( _page >= this.state.listUser.length -1) {
            _page = 0;
        }
        else {
            _page++;
        }
        this.setState({
            page: _page
        })
    }
    
    handleBtnFindClick = (txtFind) => {
        let _listUser =[[]]
        if(txtFind === "") {
            _listUser = _.chunk(this.props.listUser,4);
        }
        else {
            let dataFind = this.props.listUser.filter(i => i.Address.indexOf(txtFind) != -1);
            if(dataFind.length !== 0) {
                _listUser = _.chunk(dataFind, 4);
            }
        }

        this.setState ({
            listUser: _listUser,
            page: 0,
        })
    }

    render() {
        return (
            <div className={"rightColumn"}>
                <div className={"right-colum-title"}>
                    <span>Đề nghị</span>
                </div>

                <Search handleBtnFindClick={this.handleBtnFindClick}/>
                
                
                {this.state.listUser[this.state.page].map(item => {
                    return <Item RemoveFollow={this.props.RemoveFollow} AddFollow={this.props.AddFollow}  Following={this.props.Following} SecretKey={this.props.SecretKey} PublicKey={this.props.PublicKey} Address={item.Address}/>
                })}

                <div className="pagination">
                    <span onClick={this.handleBtnPrevClick} className={'title-link'}> &lt;&lt;  </span>
                    <span onClick={this.handleBtnNextClick} className={'title-link'}> &gt;&gt; </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listUser: state.Account.users,
    Following: state.Profile.Following,
    PublicKey: state.Authenticate.PublicKey,
    SecretKey: state.Authenticate.SecretKey,
})

const mapDispatchToProps = dispatch => ({
    GetAllUser: () => dispatch(GetAllUser()),
    RemoveFollow: (address) => dispatch(RemoveFollow(address)),
    AddFollow: (address) => dispatch(AddFollow(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(RightColumn);