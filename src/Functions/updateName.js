import makeTx from './makeTx'
export default (address, name, secret) => {
  let params = {
    key: 'name',
    value: name
  }

  return makeTx(address, 'update_account', params, secret);
}