import React, {useState} from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import ItemCartComponent from './ItemCart'; // Renamed the imported component
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.cart); // Renamed the variable

  const [Activecart, setActiveCart] = useState(true)

  return (
    <>
    <div className={`fixed top-0 right-0 w-full  lg:w-[20vw]  h-full bg-white ${Activecart? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
      <div className='flex  justify-between py-3 px-2 '>
        <h1 className='text-xl font-bold '>My Orders</h1>
        <span
            onClick={() => setActiveCart(!Activecart)}
         className='text-xl font-bold  hover:text-red-700'> <IoMdCloseCircleOutline/> </span>
        </div>
        {cartItems.length > 0 ? cartItems.map((food)=>(
          <ItemCartComponent
           key={food.id}
           id={food.id}
           name={food.name}
           price={food.price}
           desc={food.description}
           qty={food.quantity}
           img={food.img}
           />
        )): <h2>Your Cart is Empty</h2>}
        

        <div className='absolute bottom-0 mb-6 mx-3 space-y-2'>
            <h2 className=' font-bold'>Items : </h2>
            <h3 className='font-bold'>Total Amount : </h3>
            <button 
             className='bg-green-600 w-full lg:w-[18vw] mx-2 py-1 rounded-md text-xl hover:text-white'>Checkout</button>
        </div>
      </div>
      <FaShoppingCart
      onClick={() => setActiveCart(!Activecart)}
       className='text-5xl bg-gray-300 p-2  rounded-full fixed bottom-4 right-4 hover:bg-red-500 hover:text-blue-500 '/>
    </>
  );
}

export default Cart;
