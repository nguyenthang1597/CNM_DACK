import {REQUEST_POST,RECEIVE_POST, RECEIVE_ERROR, RECEIVE_LOADMORE} from '../Actions/Posts'


const initState = {
  loading: false,
  error:false,
  loadmore: false,
  posts: [
    {
      id: 1,
      owner: 'Nguyen Van B',
      postAt: '1/12/2018',
      content: 'post #1',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 2,
      owner: 'Nguyen Van C',
      postAt: '1/12/2018',
      content: 'post #2',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 3,
      owner: 'Nguyen Van D',
      postAt: '1/12/2018',
      content: 'post #3',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 4,
      owner: 'Nguyen Van E',
      postAt: '1/12/2018',
      content: 'post #4',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 5,
      owner: 'Nguyen Van F',
      postAt: '1/12/2018',
      content: 'post #5',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 6,
      owner: 'Nguyen Van G',
      content: 'post #1',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    },
    {
      id: 7,
      owner: 'Nguyen Van H',
      postAt: '1/12/2018',
      content: 'post #6',
      actions: {
        answer: 100,
        tweet: 10,
        like: 10
      }
    }
  ]
}

export default (state = initState, action) => {
  switch(action.type){
    default:
    return state;
  }
}
