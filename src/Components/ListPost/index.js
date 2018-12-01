import React from 'react'
import Post from '../Post'
const ListPost = ({Posts}) => {
  return Posts.map(i => <Post {...i}/>)
}

export default ListPost;
