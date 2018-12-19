import React from 'react'
import Post from '../Post'
const ListPost = ({posts}) => {
  console.log(posts);
  return posts.map((i, index) => <Post key={index} {...i}/>)
}


export default ListPost;
