import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 mt-2 flex items-center justify-between px-6 py-4 h-14 rounded-xl shadow-md transition-all duration-500 ease ${
        isScrolled
          ? "left-[5%] right-[5%] lg:left-[8.33%] lg:right-[8.33%] bg-[#171717]"
          : "left-0 right-0 bg-black"
      }`}
    >
      <div className="flex items-center space-x-11">
        {/* Logo and Brand */}
        <div
          className="flex items-center space-x-3 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-white rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              className="m-0.5"
            >
              <path
                d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="hidden md:block text-white text-lg font-bold">
            Proactiv
          </span>
        </div>

        {/* Menu Links for Medium and Larger Screens */}
        <div className="hidden md:flex items-start text-lg space-x-6 text-[#C9CACB]">
          <a  onClick={() => navigate("/features")} className="hover:text-white transition-colors">
            Features
          </a>
          <a onClick={()=>navigate("/pricing")} className="hover:text-white transition-colors">
            Pricing
          </a>
          <a
            onClick={() => navigate("/blogs")}
            className="hover:text-white transition-colors"
          >
            Blog
          </a>
          <a
            onClick={() => navigate("/contact")}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Menu Button and Actions */}
      <div className="flex items-center space-x-4">
        {/* Register and Demo for Medium and Larger Screens */}
        <a
          onClick={() => navigate("/login")}
          className="hidden md:block text-gray-400 text-base text-[15px] hover:text-white transition-colors py-2 px-6 rounded-lg hover:bg-[#34B1D9]"
        >
          Register
        </a>

        <button className="hidden md:block bg-[#34B1D9] text-black font-semibold py-[8px] px-0 text-[13px] rounded-lg w-28 hover:bg-gray-100 transition-colors">
          Book a demo
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Toggle Menu"
          className="block md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu (visible on small screens only) */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-black border-t border-gray-800 text-white flex flex-col space-y-2 px-6 py-4 md:hidden">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a
            onClick={() => navigate("/blogs")}
            className="hover:text-gray-300 transition-colors"
          >
            Blog
          </a>
          <a
            onClick={() => navigate("/contact")}
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </a>

          <button className="bg-white text-black font-semibold w-full py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors">
            Book a demo
          </button>

          <div className="flex gap-4">
            <button
              aria-label="Twitter X"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 w-4 h-4"
              >
                <path d="M23.707 1.707a1 1 0 00-1.414-1.414L12 10.586 1.707.293a1 1 0 00-1.414 1.414L10.586 12 .293 22.293a1 1 0 001.414 1.414L12 13.414l10.293 10.293a1 1 0 001.414-1.414L13.414 12l10.293-10.293z" />
              </svg>
            </button>

            <button
              aria-label="Toggle Dark Mode"
              className="hover:text-white transition-colors"
            >
              <LuMoon className="text-gray-400 w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(NavBar);
