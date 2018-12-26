import getName from '../API/getName'
import getAvatar from '../API/getAvatar'


const convertToPost = async (tx) => {
  let post = {};
  post['time'] = tx.Time;
  let reqOwnerName = await getName(tx.Address);
  try {
    let reqOwnerImage = await getAvatar(tx.Address);
    let ownerImage = reqOwnerImage.data.Avatar
    post['ownerImage'] = ownerImage;
  } catch (error) {
    post['ownerImage'] = null;
  }
  
  let ownerName = reqOwnerName.data.Name;
  
  post['owner'] = ownerName;
  if (tx.Operation === 'create_account') {
    let reqOtherName = await getName(tx.Params.address);
    let otherName = reqOtherName.data.Name || tx.Params.address;
    post['othername'] = otherName;
    post['content'] = `Đã tạo tài khoản ${otherName}`;
  }
  if (tx.Operation === 'payment') {
    let reqOtherName = await getName(tx.Params.address);
    let otherName = reqOtherName.data.Name || tx.Params.address;
    post['othername'] = otherName;
    post['content'] = `Đã chuyển ${tx.Params.amount} CEL cho ${otherName}`;
  }
  if (tx.Operation === 'update_account') {
    if (tx.Params.key === 'name')
      post['content'] = `Đã cập nhật tên thành ${tx.Params.value}`
    if (tx.Params.key === 'picture'){
      post['content'] = `Đã cập nhật ảnh đại diện thành`
      post['image'] = tx.Params.value
    }
    // if(tx.Params.key === 'followings'){
      
    //   let array = tx.Params.value.map(e => getName(e));
    //   let res = await Promise.all(array);
    //   post['content'] = `Bắt đầu theo dõi `
    //   res.map(i => post['content'] += (i.data.Name + ', '))
    // }
  }
  if(tx.Operation === 'post'){
    post['content'] = tx.Params.content.text
  }
return post;
}

export default convertToPost;
