import {UPDATE_INFO, UPDATE_AVATAR} from '../Actions/Profile'

const initState = {
  Name: 'Nguyễn Văn A',
  Username: 'NguyenVanA123',
  Phone: '0901234567',
  Address: '1/2/3 Đường a, Phường B, Quận C',
  DoB: '2000-01-01',
  Avatar: null,
  Wallpaper: null
}


export default (state = initState, action) => {
  switch(action.type){
    case UPDATE_AVATAR:
      return {...state, Avatar: action.image}
    default:
      return state;
  }
}
