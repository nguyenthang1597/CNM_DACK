import makeTx from './makeTx'
export default (address, to, amount, secret) => {
  let params = {
    address: to,
    amount
  }
  return makeTx(address, 'payment', params, secret);
}