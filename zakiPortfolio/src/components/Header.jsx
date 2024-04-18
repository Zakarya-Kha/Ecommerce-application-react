import React, {useState} from 'react'


function Header() {
    const [brandName, setBrandName] = useState("Zaki Portfolio")
    const [menulinks, setMenulinks] = useState([
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "About",
            link: "/about"
        },
        {
            id: 3,
            title: "Skills",
            path: "/skill"
        },
        {
            id: 4,
            title: "Services",
            path: "/services"
        },
        {
            id: 5,
            title: "Contact",
            path: "/contact"
        }
    ])
    
  return (
    <div className='flex justify-between px-6 bg-gray-200 h-16 border items-center'>
      <div>
        {/* logo */}
        <a href= "" 
        className="text-2xl font-bold  hover:text-orange-600"
        >
            <h1>{brandName}</h1>
        </a>
      </div>

      <div className='flex gap-x-6 list-none'>
        {/* menu  */}

        {menulinks.map(link => (
            <li key={link.id}>
                <a href= {link.link}
                className="text-xl  hover:text-orange-500"
                >
                    {link.title}
                </a>
            </li>
        ))}
        {/* <li>
            <a href= "/" 
            className="text-xl  text-gray-800"
            >
                Home
            </a>
        </li>
        <li>
            <a href= "/about" 
            className="text-xl  text-gray-800"
            >
                About
            </a>
        </li>
        <li>
            <a href= "/skill" 
            className="text-xl hover:text-orange-500 text-gray-800"
            >
                Skills
            </a>
        </li>
        <li>
            <a href= "/services" 
            className="text-xl  text-gray-800"
            >
                Services
            </a>
        </li>
        <li>
            <a href= "/contact" 
            className="text-xl  text-gray-800"
            >
                Contact
            </a>
        </li> */}
      </div>

      <div>
        {/* button */}
        <button className="  text-gray-200 bg-orange-500 px-2 py-2 rounded-lg hover:bg-orange-700 hover:text-xl">
            Download CV
        </button>
      </div>
    </div>
  )
}

export default Header
