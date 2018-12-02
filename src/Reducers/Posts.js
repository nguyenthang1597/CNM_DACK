
const initState = [
  {
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
    owner: 'Nguyen Van G',
    content: 'post #1',
    actions: {
      answer: 100,
      tweet: 10,
      like: 10
    }
  },
  {
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

export default (state = initState, action) => {
  switch(action.type){
    default:
    return state;
  }
}
