import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
<input
className="search-input"
type="text"


placeholder="Enter your search shoes."
/>
const Navbar = () => {
  return (
    <div className='  flex justify-between  '>
 <div>

 <input
          className="search-input"
          type="text"
  

          placeholder="Enter your search shoes."
        />
 </div>
 <div className=" flex ">
        <a href="#">
          <FiHeart className=" mr-2" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className=" mr-2" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </div>
  )
}

export default Navbar