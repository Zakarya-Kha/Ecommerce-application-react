import React from 'react'
import Anouncement from '../../components/Anouncement'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const SingleProduct = () => {
  return (
    <div >
      <Anouncement/>
      <div className='flex gap-6 px-52 my-9'>
        <div className='w-[50%]'>
            <img className='' src="https://media.voguebusiness.com/photos/5ce3d84932029c6ded13e829/2:3/w_2560%2Cc_limit/online-product-may-19-article.jpg" alt="" />
        </div>
        <div className=' w-[50%] pt-14 p-3 space-y-3'>
            <h1>Denis Jumsuit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe ullam deleniti blanditiis aliquam temporibus asperiores animi quas molestias, at odit rem reiciendis doloribus dolores error neque assumenda iste impedit?</p>
            <p className='text-xl'>$ 10</p>

            <div className='space-x-16'>
        <select className='border'>
                <option disabled selected>Color</option>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
            </select>

            <select className='border'>
                <option disabled selected>Size</option>
                <option>XS</option>
                <option>S</option>
                <option>L</option>
                <option>M</option>
                <option>XL</option>
            </select>
        </div>
            <div>
                <div className='space-x-2'>
                <button className='bg-blue-500 text-white px-2  text-xl rounded-md mt-6 '>-</button>
                <span className='border px-4 py-1 rounded-md'>1</span>
                <button className='bg-blue-500 text-white px-2  text-xl rounded-md mt-6 '>+</button>
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-md mt-6 '>ADD TO CART</button>
            </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default SingleProduct
