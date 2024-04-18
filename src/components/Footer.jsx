import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='mt-9 py-3 px-3 bg-gray-300 border grid grid-cols-4'>
        <div>
            {/* text */}
            <h1 className='text-2xl font-bold mb-3'>ZakiShop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, consectetur! Perferendis, repellat. Beatae eaque ea dolor officiis, totam quod tenetur.</p>
        </div>
        <div>
            {/* links */}
            <h1 className='text-2xl font-bold mb-3'>Useful links</h1>
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Register</Link></li>
            </ul>
        </div>
        <div>
            {/* products */}
            <h1 className='text-2xl font-bold mb-3'>Products</h1>
            <ul>
                <li><Link to="#">Men fashion</Link></li>
                <li><Link to="#">Women Fashion</Link></li>
                <li><Link to="#">Accessories</Link></li>
                <li><Link to="#">My Account</Link></li>
                <li><Link to="#">Wishlist</Link></li>
            </ul>
        </div>

        
        <div>
            {/* contact */}
            <h1 className='text-2xl font-bold mb-3'>Contact</h1>
            <div className='flex items-center gap-2'>
                <FaLocationDot/>
                <span>123 Swabi Turlandi</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaPhoneAlt/>
                <span>+92 13456789</span>
            </div>
            <div className='flex items-center gap-2'>
                <MdEmail/>
                <span>abc@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
