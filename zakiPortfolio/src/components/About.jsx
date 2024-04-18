import React, {useState} from 'react'

function About() {
  const [data, setData] = useState({
    title: "Frontend Developer",
    desc1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptates sed veritatis dolorem, quos sunt quidem atque aspernatur, saepe velit perferendis cupiditate.",
    desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vero inventore debitis unde. Maxime nesciunt nisi molestiae aliquam adipisci reprehenderit aperiam sequi?",
    image:`https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais`,

   

    
    
  })
  return (
    <div className='mb-14 bg-gray-100 p-12' >
      <div className='text-center font-bold text-3xl underline my-6'><h1>About</h1></div>
      <div className='flex '> 
      <div className=''>
        {/* image */}
        <img className='w-1/2 flex mx-auto rounded-full' src={data.image} alt="" />
      </div>
      <div className='flex flex-col justify-center px-8  w-2/3  '>
        {/* text */}
        <h1 className='text-3xl font-medium mb-4'>{data.title}</h1>
        <p className='mb-3'>{data.desc1} </p>
        <p className='mb-7'>{data.desc2}</p>
        {/* <br /> */}
        <div >
        <a className='bg-orange-800 py-3 px-2 rounded-full text-white hover:bg-orange-400 ' href="">Read More...</a>
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default About
