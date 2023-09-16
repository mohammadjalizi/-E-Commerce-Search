import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className='  container   mt-4    flex justify-between  '>
 <div>

 <input
          className="  p-2 border  rounded-lg border-green-400    "
          type="text"
  

          placeholder="Enter your search shoes."
        />
 </div>
 <div className=" flex">
        <a href="#">
          <FiHeart className="  nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </div>
  )
}

export default Navbar