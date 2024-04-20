import React, {useState} from 'react'
import { SiFrontendmentor } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

function Services() {
    const [data, setData] = useState({
        title1: "Frontend Development",
        title2: "WordPress Development",
        desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod",
        desc2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod, quaerat, quibusdam quidem quas, quod",



    })
  return (
    <div className='py-6 mb-8'>
      <h1 
      className='font-awesome font-bold text-center text-3xl underline mb-7 '>Services</h1> 

      <div className='flex mb-8'>
        <div className='w-1/2 border bg-gray-100 hover:bg-gray-200 text-center mx-4 p-5 '>
            {/* card 1 */}
            <a className='flex justify-center font-bold text-3xl mb-2' href=""><SiFrontendmentor /></a>
            <h1 className='font-bold text-2xl mb-1'>{data.title1}</h1>
            <p className='mb-4'>{data.desc1}</p>
            <a className='bg-orange-800 px-3 py-2 rounded-full hover:bg-orange-400 font-bold' href="">Check</a>

        </div>

        <div className='w-1/2 border bg-gray-100  hover:bg-gray-200 text-center mx-4 p-5 '>
            {/* card 1 */}
            <a className='flex justify-center font-bold text-3xl mb-2' href=""><FaWordpress /></a>
            <h1 className='font-bold text-2xl mb-1'>{data.title2}</h1>
            <p className='mb-4'>{data.desc2}</p>
            <a className='bg-orange-800 px-3 py-2 rounded-full hover:bg-orange-400 font-bold' href="">Check</a>

        </div>
        
      </div>

    </div>
  )
}

export default Services
