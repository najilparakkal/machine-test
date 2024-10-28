import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
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
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 z-50 mt-2 flex items-center justify-between px-3 md:px-6 py-3 h-14 rounded-xl shadow-md transition-all duration-500 ease-in-out ${
        isScrolled
          ? "left-[5%] right-[5%] lg:left-[8.33%] lg:right-[8.33%] bg-[#171717]"
          : "left-0 right-0 bg-black"
      }`}
    >
      <div className="flex items-center space-x-2 sm:space-x-6">
        {/* Logo and Brand */}
        <div
          className="flex items-center space-x-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-white rounded-full p-1">
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
          <span className="hidden sm:block text-white text-lg font-bold">
            UptimeWiz
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-3 text-[#C9CACB] text-xs sm:text-sm">
          <a
            onClick={() => navigate("/features")}
            className="hover:text-white transition-colors"
          >
            Key Features
          </a>
          <a
            onClick={() => navigate("/pricing")}
            className="hover:text-white transition-colors"
          >
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
            Contact Us
          </a>
        </div>
      </div>

      {/* Menu Button and Actions */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Register and Demo for Medium and Larger Screens */}
        <a
          onClick={() => navigate("/login")}
          className="hidden md:block text-gray-400 text-xs sm:text-sm hover:text-white transition-colors py-1 px-3 rounded-lg hover:bg-[#141414] border border-gray-900 hover:border-gray-700"
        >
          Register
        </a>

        <button className="hidden md:block bg-[#34B1D9] text-black font-semibold py-1 px-3 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          Login
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-black border-t border-gray-800 text-white flex flex-col space-y-2 px-6 py-3 md:hidden">
          <a
            onClick={() => navigate("/features")}
            className="hover:text-gray-300 transition-colors"
          >
            Key Features
          </a>
          <a
            onClick={() => navigate("/pricing")}
            className="hover:text-gray-300 transition-colors"
          >
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
            Contact Us
          </a>

          <button className="bg-white text-black font-semibold w-full py-1 text-sm rounded-lg hover:bg-gray-100 transition-colors">
            Login
          </button>

          <div className="flex gap-4 mt-3">
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
