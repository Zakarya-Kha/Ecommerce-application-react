import React from 'react'
import Anouncement from '../../components/Anouncement'
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'


function ProductList() {
  return (
    <div>
      <Anouncement/>
      <div>
      <div className='px-3 my-5 '>
        <h1  className='text-3xl font-bold mb-6'>Dresses</h1>
        <div className='flex justify-between'>
            <div>
            <filter  className='text-xl font-bold'>Filter products:</filter>
            <select className='border rounded-md mx-2'>
                <option disabled selected >Category</option>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
            </select>

            <select className='border rounded-md mx-2'>
                <option disabled selected >Color</option>
                <option>White</option>
                <option>Black</option>
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>pink</option>
                <option>yellow</option>
                <option>purple</option>
            </select>

            <select className='border rounded-md mx-2'>
                <option disabled selected >Size</option>
                <option>XL</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>

            </select>

            </div>
            <div>
        <filter className='text-xl font-bold'>Sort products:</filter>
        <select className='border rounded-md mx-2'>
            <option disabled selected >Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
        </select>
        </div>
        </div>
    </div>
    <Products/>
    <Newsletter/>
    <Footer/>
      </div>
    </div>
  )
}

export default ProductList
