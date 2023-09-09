import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='mb-5 flex items-center justify-around p-5 bg-slate-600 font-extrabold'>
        <h1 className='text-white'>Blog</h1>
        
        <ul className='flex gap-5 text-white font-light'>
            <li><Link to='/'>Postar</Link></li>
            <li><Link to='/postagens'>Postagens</Link></li>
        </ul>
    </div>
  )
}

export default Header