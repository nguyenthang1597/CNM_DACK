import {RECEIVE_FOLLOW} from '../Actions/Follow'


const initState = {
  loading: false,
  error:false,
  loadmore: false,
  follow: [
    {
      id: 1,
      user: 'Nguyen Van B',
      username: '@NguyenB',
      content: 'Đây là mô tả của B',
    },
    {
        id: 2,
        user: 'Nguyen Van B',
        username: '@NguyenB',
        content: 'Đây là mô tả của B',
    },
    {
      id: 3,
      user: 'Nguyen Van B',
      username: '@NguyenB',
      content: 'Đây là mô tả của B',
  },
  {
    id: 3,
    user: 'Nguyen Van B',
    username: '@NguyenB',
    content: 'Đây là mô tả của B',
},
{
  id: 3,
  user: 'Nguyen Van B',
  username: '@NguyenB',
  content: 'Đây là mô tả của B',
},
{
  id: 3,
  user: 'Nguyen Van B',
  username: '@NguyenB',
  content: 'Đây là mô tả của B',
},
{
  id: 3,
  user: 'Nguyen Van B',
  username: '@NguyenB',
  content: 'Đây là mô tả của B',
}
  ]
}

export default (state = initState, action) => {
  switch(action.type){
    default:
    return state;
  }
}
