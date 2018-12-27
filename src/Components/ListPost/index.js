import React from 'react'
import Post from '../Post'
const ListPost = ({PublicKey,posts, SecretKey, connection}) => {
  return posts.map((i, index) => {
  return <Post connection={connection} PublicKey={PublicKey} key={index} post={i} SecretKey={SecretKey}/>})
}

export default ListPost;
