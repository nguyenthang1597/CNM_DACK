import React from 'react'
import Post from '../Post'
const ListPost = ({posts}) => posts.map((i, index) => <Post key={index} {...i}/>)


export default ListPost;
