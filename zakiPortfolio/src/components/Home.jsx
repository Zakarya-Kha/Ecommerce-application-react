
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Home() {
  return (
    <div className='flex '>
      <div className=' p-5 flex flex-col flex-wrap w-3/4 justify-center px-9 text-white bg-pink-500 rounded-r-lg'>
        {/* text */}
        <h3>Hi, I am</h3>
        <h1 className='font-bold text-3xl'>Zakarya Khan</h1>
        <h2 className='text-2xl'>And I am a Frontend Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Laboriosam sed voluptatum a iste. Repellendus porro, vitae totam ipsam labore eligendi!</p>
        <div className='flex gap-4 text-2xl mt-4'>
          {/* icons */}
          <a className=' bg-gray-700 h-8 w-8 flex py-1 rounded-full justify-center hover:bg-blue-500' href=""><FaFacebook /></a>
          <a className=' bg-gray-700 h-8 w-8 flex py-1 rounded-full justify-center hover:bg-blue-500'  href=""><FaGithub /></a>
          <a className=' bg-gray-700 h-8 w-8 flex py-1 rounded-full justify-center hover:bg-blue-500'  href=""><FaLinkedin /></a>
          <a className=' bg-gray-700 h-8 w-8 flex py-1 rounded-full justify-center hover:bg-blue-500'  href=""><FaYoutube /></a>
          
        </div>
        <a href=""className='bg-orange-800 px-3 py-2 rounded-full shadow-lg mx-auto  hover:bg-orange-400 '>Contect Me</a>
      </div>
      <div className=' flex justify-center'>
        
        <img className='w-full   lg:w-3/64 p-8 rounded-full lg:rounded-full px-8' src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais" alt="" />
      </div>
    </div>
  )
}

export default Home

