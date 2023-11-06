import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-white bg-black">
      <nav className="flex items-center container mx-auto">
        <div className="w-48">
          <a href="/" className="text-white italic">
            <img src="/images/techtown.png" alt="TechTown" />
          </a>
        </div>

        <div className="ml-8 flex gap-5">
          <NavItem to="/" text="HOME" />
          <NavItem to="/categories/gaming-pc" text="GAMING PC" />
          <NavItem to="/categories/laptops" text="LAPTOPS" />
          <NavItem to="/categories/pc-component" text="PC COMPONENTS" />
          <NavItem to="/products" text="ALL PRODUCTS" />
        </div>

        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <NavLink to="/cart">
              <FaShoppingCart className="text-white text-xl" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/account">
              <FaUser className="text-white text-xl" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ to, text }) => (
  <div className="font-semibold p-2">
    <NavLink
      to={to}
      className="text-white hover:bg-red-500 hover:text-white p-2"
      activeClassName="bg-red-500 text-white"
    >
      {text}
    </NavLink>
  </div>
);

export default Navbar;
