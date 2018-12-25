import React from 'react'
import Following from '../Following'
import './ListFollow.css'

const ListFollow = ({array , type, arrayFollowing, PublicKey, SecretKey, address }) => {
  return (
    <div className='listFollow'>
      {
        array.map((i, index) => <Following address={address} array={array} PublicKey={PublicKey} SecretKey={SecretKey} arrayFollowing={arrayFollowing} type={type} key={index} publickey={i} />)
      }
    </div>
  )
}


export default ListFollow;
