import React from 'react'
import Following from '../Following'
const ListFollow = ({follow}) => follow.map((i, index) => <Following key={index} {...i}/>)


export default ListFollow;
