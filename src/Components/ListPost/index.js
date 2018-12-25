import React from 'react'
import Post from '../Post'
const ListPost = ({PublicKey,posts, SecretKey}) => {
  return posts.map((i, index) => <Post PublicKey={PublicKey} key={index} post={i} SecretKey={SecretKey}/>)
}

export default ListPost;
