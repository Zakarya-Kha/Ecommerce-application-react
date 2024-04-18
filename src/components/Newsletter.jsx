import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <div className=' my-9 flex flex-col justify-center items-center gap-3'>
        <h1 className='text-3xl font-bold'>Newsletter</h1>
        <p>Get timely updates from your favorite products </p>
        <form className="flex flex-col items-center gap-3">
          <input className=' px-1 py-1 rounded-md w-[380px] border outline-none' type="email" placeholder="Enter your email" />
          <button
          className='bg-blue-600 text-white p-1 text-xl rounded-md ' 
           type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
