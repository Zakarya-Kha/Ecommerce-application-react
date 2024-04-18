import React from 'react';
import { FaCartArrowDown, FaHeart, FaSearch } from 'react-icons/fa';
import {popularProducts} from '../assets/Data'

function Products() {
  return (
    <div className='my-12 relative grid grid-cols-4 gap-2 px-9  '>
        {popularProducts.map((product) => (
      <div key={product.id} className='border w-[300px] h-[300px] relative flex justify-center items-center  bg-slate-400'>
        <img className='max-w-full max-h-full' src={product.img} alt="" />
        <div className='absolute inset-0 flex justify-center  items-center gap-4 opacity-0 hover:opacity-80'>
            <div className='bg-white text-xl rounded-full p-1 hover:text-2xl'>
          <FaCartArrowDown />
          </div>
          <div className='bg-white text-xl rounded-full p-1 hover:text-2xl'>
          <FaSearch  />
          </div>
          <div className='bg-white text-xl rounded-full p-1 hover:text-2xl'>
          <FaHeart  />
          </div>
        </div>
      </div>
  ))}
    </div>
  );
}

export default Products;
