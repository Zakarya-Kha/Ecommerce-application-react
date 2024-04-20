import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/CartSlice';

const ItemCart = ({id,img,price,desc,name,qty}) => {
  const dispatch = useDispatch();

  return (
    <>
   <div className='flex shadow-md lg:w-[18vw] p-2 ml-1 mt-6 w-[100vw]'>
    <img className='lg:w-[5vw] h-[8vh] ' src={img} alt="" />
    <div> 
    <div className='flex lg:gap-16  gap-44'>
      <h1>{name}</h1>
      <span onClick={() => dispatch(removeFromCart({id,price,img,qty}))} className='hover:text-red-500'> <MdDelete/> </span>
      </div>
      <div className='flex justify-between lg:gap-16  gap-32'>
      <div>
        <span className='text-green-500 font-bold'>Rs.{price}</span>
      </div>
      <div className='flex '>
        <FaMinus className='border p-1 cursor-pointer text-xl bg-gray-200 hover:bg-green-400 rounded-full'/>
        <span>{qty}</span>
        <FaPlus className='border p-1 cursor-pointer text-xl bg-gray-200 hover:bg-green-400 rounded-full'/>
      </div>
      </div>
    </div>
   </div>

   

   </>

   
  )
}

export default ItemCart
 