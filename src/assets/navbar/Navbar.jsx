import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
         
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container flex   ">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;