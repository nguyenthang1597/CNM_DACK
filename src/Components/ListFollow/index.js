import React from 'react'
import Following from '../Following'
import './ListFollow.css'

const ListFollow = ({follow}) => <div className='listFollow'>
{
  follow.map((i, index) => <Following key={index} {...i}/>)
}
</div>


export default ListFollow;
