import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6 my-6'>
      <h2 className='text-2xl font-semibold'>Find the best food</h2>
      <div className='mt-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='text-xl font-semibold bg-gray-300 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white'>All</button>
        <button className='text-xl font-semibold bg-gray-300 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
        <button className='text-xl font-semibold bg-gray-300 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white'>dinner</button>
        <button className='text-xl font-semibold bg-gray-300 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
        <button className='text-xl font-semibold bg-gray-300 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white'>Snaks</button>
      </div>
    </div>
  )
}

export default CategoryMenu
