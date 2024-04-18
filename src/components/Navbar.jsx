import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className="flex justify-between border px-6 items-center py-3 bg-yellow-500 fixed z-10 w-full " >
      <div className="text-3xl font-bold">
        {/* logo */}
        <span className="text-blue-600">Zaki</span>
        <span className="text-red-600">Shop</span>
      </div>
      <div className=" w-[380px] flex items-center bg-white rounded-full px-3  gap-3">
        {/* searchbar */}
        <CiSearch className="text-xl"/>
        <input className="w-[350px] px-2 py-1 outline-none" placeholder='Search your favorite items' />
      </div>
      <div>
        {/* menu */}
        <ul className="flex gap-3 text-lg font-semibold">
        <li>
                <NavLink to='/' className={({isActive}) => `${isActive?"text-red-600": ""}`} >Home</NavLink>
            </li>
            <li>
                <NavLink to='/register' className={({isActive}) => `${isActive?"text-red-600": ""}`} >Register</NavLink>
            </li>
            <li>
                <NavLink to='/login' className={({isActive}) => `${isActive ? "text-red-600" : ""}`}  >Login</NavLink>
            </li>
            <li>
                <NavLink to='/product' className={({isActive}) => `${isActive ? "text-red-600" : ""}`}  >Products</NavLink>
            </li>
            <li>
                <NavLink to='/singleproduct' className={({isActive}) => `${isActive ? "text-red-600" : ""}`}  >SingleProduct</NavLink>
            </li>
        </ul>
      </div>
      <div>
        {/* icon */}
        <FaCartArrowDown className="text-2xl"/>
      </div>
    </div>
  )
}

export default Navbar
