import makeTx from './makeTx'
export default (address, hash, text, secret) => {
  let params = {
    object: hash,
    content: {
      type: 1,
      text
    }
  }

  return makeTx(address, 'interact', params, secret);
}
