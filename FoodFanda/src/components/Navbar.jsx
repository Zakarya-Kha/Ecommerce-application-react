import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-6  items-center my-3'>
      <div>
        <h3 className='text-2xl mb-3'>{ new Date().toUTCString().slice(0, 16) }</h3>
        <h1 className='text-3xl'>Food <span className='text-red-600'>Fanda</span></h1>
      </div>
      <div className='w-[255px] h-[30px]  '>
        <input className='outline-none w-[255px] px-2 rounded-full' type="search" placeholder='Search Your Favoirate Food' autoComplete='off' />
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
