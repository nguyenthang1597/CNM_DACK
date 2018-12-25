import React from 'react'
import Following from '../Following'
import './ListFollow.css'

const ListFollow = ({array}) => {
  return (
    <div className='listFollow'>
      {
        array.map((i, index) => <Following key={index} publickey={i} />)
      }
    </div>
  )
}


export default ListFollow;
