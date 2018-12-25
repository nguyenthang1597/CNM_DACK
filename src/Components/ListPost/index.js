import React from 'react'
import Post from '../Post'
const ListPost = ({posts}) => {
  return posts.map((i, index) => <Post key={index} post={i}/>)
}


export default ListPost;
