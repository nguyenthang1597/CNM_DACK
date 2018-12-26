import React, { Component } from 'react';
import '../Dashboard.css'
import getAvatar from '../../../API/getAvatar'
import getName from '../../../API/getName'
import makeTx from '../../../Functions/makeTx'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Avatar: null,
            Name: '',
            isFollow: false,
        }
    }

    componentWillMount() {
        getAvatar(this.props.Address).then(res => {
            this.setState({ Avatar: res.data.Avatar })
        });
        getName(this.props.Address).then(res => {
            this.setState({ Name: res.data.Name })
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            Avatar: null,
            Name: '',
            isFollow: false,
        })
        setTimeout(()=> {
            getAvatar(props.Address).then(res => {
                this.setState({ Avatar: res.data.Avatar })
            });
            getName(props.Address).then(res => {
                this.setState({ Name: res.data.Name })
            });
            if(this.props.Following.find(e => e === this.props.Address)) {
                console.log("asdasdasd");
                this.setState({
                    isFollow: true,
                })
            }
        },1000)
    }

    handleBtnFollowClick = async(type, _address) => {
        const Params = {
            key: 'followings',
            value: {
              addresses: []
            }
          }
      
          switch(type) {
            case 1:
            {
              // UnFollow
              Params.value.addresses = this.props.Following.filter(e => e !== _address)
              try {
                await makeTx(this.props.PublicKey,'update_account',Params,this.props.SecretKey);
                this.props.RemoveFollow(_address);
                this.setState({
                    isFollow: false,
                })
              } catch (error) {
                alert('Lỗi')
              }
            console.log(Params);
            }
            break;
            case 2: {
              // Follow
              Params.value.addresses = [...this.props.Following, _address];
              try {
                await makeTx(this.props.PublicKey,'update_account',Params,this.props.SecretKey);
                this.props.AddFollow(_address)
                this.setState({
                    isFollow: true,
                })
              } catch (error) {
                alert('Lỗi')
              }
                console.log(Params);
            }
            break;
          }
    }

    render() {
        return (
            <div className="info-orther-people">
                <img src={this.state.Avatar ? `data:image/jpeg;base64,${this.state.Avatar}` : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'} alt='avatar'></img>
                <div className="information">
                    <div>{this.state.Name}</div>
                    <div>@{this.props.Address}</div>
                    {this.state.isFollow ?
                        <button onClick={() => this.handleBtnFollowClick(1, this.props.Address)}>Bỏ theo dõi</button>
                        :
                        <button onClick={() => this.handleBtnFollowClick(2, this.props.Address)}>Theo dõi</button>
                    }
                </div>
            </div >
        );
    }
}

export default (Item);