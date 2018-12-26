import React, { Component } from 'react';
import '../Dashboard.css'
import { GetAllUser } from '../../../Actions/Account';
import { connect } from 'react-redux'
import _ from 'lodash'
import Item from './Item'
import {AddFollow, RemoveFollow} from '../../../Actions/Profile'

class RightColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: [[]],
            page: 0,
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

    render() {
        return (
            <div className={"rightColumn"}>
                <div className={"right-colum-title"}>
                    <span>Đề nghị</span>
                </div>
                
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