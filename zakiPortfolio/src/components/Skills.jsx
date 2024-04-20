import React from 'react'

function Skills() {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center mb-12'>My Expertise</h1>
      <div className='flex mb-16'>
        <div className='border w-1/2  bg-pink-600 text-center text-white p-12'>
            <h1 className='text-3xl font-bold mb-3'>I love these technologies</h1>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum explicabo aliquam, qui ea facere vitae fugiat illum quaerat? Incidunt, vero cupiditate.</p>
            <a className='bg-orange-800 px-3 py-1 rounded-full hover:bg-orange-400' href="">Hire Me</a>
        </div >
        
       <div className="flex justify-center p-12 w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                CSS
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                TAILWINDCSS
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                BOOTSTRAP
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                JAVASCRIPT
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                REACT.JS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                WORDPRESS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                RESPONSIVE DESIGN
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                GOOD COMMUNICATIONS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                LEDERSHIP
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                PYTHON
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                DJANGO
              </p>
             
            </div>


      </div>
    </div>
  )
}

export default Skills
