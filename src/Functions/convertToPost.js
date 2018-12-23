import getName from '../API/getName'
import getAvatar from '../API/getAvatar'


const convertToPost = async (tx) => {
  let post = {};
  post['time'] = tx.Time;
  let reqOwnerName = await getName(tx.Address);
  let ownerName = reqOwnerName.data.Name || tx.Address;
  post['owner'] = ownerName;
  if (tx.Operation === 'payment') {
    let reqOtherName = await getName(tx.Params.address);
    let otherName = reqOtherName.data.Name || tx.Params.address;
    post['othername'] = otherName;
    post['content'] = `Đã chuyển ${tx.Params.amount} cho ${otherName}`;
  }
  if (tx.Operation === 'update_account') {
    if (tx.Params.key === 'name')
      post['content'] = `Đã cập nhật tên thành ${tx.Params.value}`
    if (tx.Params.key === 'picture')
      post['content'] = `Đã cập nhật ảnh đại diện`
    if (tx.Params.key === 'followings') {
      let array = tx.Params.value.map(e => getName(e));
      let res = await Promise.all(array);
      post['content'] = `Đã theo dõi `;
      res.forEach((e, index) => post.content += `${(e.data.Name || tx.Params.value[index])}${index < res.length -1 ? ', ' : ''}`)
    }
  }
return post;
}

export default convertToPost;