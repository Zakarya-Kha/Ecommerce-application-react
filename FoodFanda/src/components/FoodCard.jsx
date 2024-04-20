import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';

const FoodCard = ({id, img, price, rating, desc, name}) => {
  const dispatch = useDispatch();
  return (
    <div className='w-[285px] h-auto bg-white mx-3 py-3 rounded-md  flex flex-col justify-center ' >
        <div className='flex justify-center mb-4'>
      <img className='w-[250px] h-[180px] overflow-hidden hover:scale-110 transition-all duration-500 ease-in-out' src={img}alt="" />
      </div>

      <div className='flex justify-between px-3'>
        <h1 className='font-semibold'>{name}</h1>
    <span className='text-green-500 font-bold'>Rs.{price}</span>
      </div>
      <div className='px-3 font-normal '>
        <p>{desc.slice(0,50) }....  </p>
      </div>
      <div className='flex justify-between px-3'>
        <div className='flex items-center'>
        <FaStar className='text-green-500'/> {rating}
        </div>
        <button
        onClick={() => {
          dispatch(addToCart({
            id: id,
            name: name,
            img: img,
            price: price,
            desc: desc,
            rating: rating,
            quantity: 1,
          }));
        }}
         className='text-sm font-semibold bg-green-500 px-2 rounded-md hover:text-white hover:bg-green-600'>Add to Cart</button>
      </div>
    </div>
  )
}

export default FoodCard
