import makeTx from './makeTx'
export default (address, text, secret) => {
  let params = {
    content: {
      type: 1,
      text
    },
    keys: []
  }

  return makeTx(address, 'post', params, secret);  
}