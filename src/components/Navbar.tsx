import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="px-6 py-3 flex justify-between items-center gap-4 md:px-2 md:flex-wrap lg:px-10">
      {/* mobile case */}
      <div className="flex justify-between min-w-[40%] gap-4 md:hidden">
        <div>
          <button
            className="text-2xl w-fit md:hidden"
            onClick={() => setIsLinksOpen((prev) => !prev)}
          >
            ☰
          </button>
          {isLinksOpen && (
            <ul
              className={`
          absolute  left-4 right-4 z-50 mt-3 rounded-xl bg-[#222] p-6 text-white text-center flex-col gap-3
          transition-all duration-300 ease-in-out
          ${
            isLinksOpen
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          }
          md:hidden
        `}
            >
              <li className="hover:bg-[#ffffff24] py-2">
                <a href="/Shop"> Shop</a>
              </li>
              <li className="hover:bg-[#ffffff24] py-2">
                <a href="/sales"> On Sales</a>
              </li>
              <li className="hover:bg-[#ffffff24] py-2">
                <a href="/Arrival"> New Arrival</a>
              </li>
              <li className="hover:bg-[#ffffff24] py-2">
                <a href="/login"> Login</a>
              </li>
              <li className="hover:bg-[#ffffff24] py-2">
                <a href="/register"> Register</a>
              </li>
            </ul>
          )}
        </div>
        <div className="logo">
          <Link to="/" className="text-3xl font-black min-w-24">
            Shop-co
          </Link>
        </div>
      </div>

      {/* large screen case */}
      <div className=" hidden md:block logo">
        <Link to="/" className="text-3xl font-black min-w-24">
          Shop-co
        </Link>
      </div>
      <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-800 ">
        <li className="hover:bg-[#ffffff24] py-2">
          <a href="/Shop"> Shop</a>
        </li>
        <li className="hover:bg-[#ffffff24] py-2">
          <a href="/sales"> On Sales</a>
        </li>
        <li className="hover:bg-[#ffffff24] py-2">
          <a href="/Arrival"> New Arrival</a>
        </li>
        <li className="hover:bg-[#ffffff24] py-2">
          <a href="/login"> Login</a>
        </li>
        <li className="hover:bg-[#ffffff24] py-2">
          <a href="/register"> Register</a>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <div
          className={`flex justify-center relative pl-6 w-fit  rounded-full sm:bg-[#eceff1]`}
        >
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="  text-gray-500"
          >
            <CiSearch className="text-xl font-bold" />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="search is here"
              className={` ${
                isSearchOpen
                  ? "block absolute  z-50 mt-9   w-fit px-4 py-2 rounded-full transition-all duration-300 ease-in-out bg-[#eceff1] opacity-100 translate-y-0 "
                  : "hidden  opacity-0 -translate-y-2"
              } md:block w-fit px-4 py-2 bg-transparent}  `}
            />
          )}

          <input
            type="text"
            placeholder="search is here"
            className="hidden sm:block  w-fit px-4 py-2 rounded-full transition-all duration-300 ease-in-out  bg-[#eceff1]"
          />
        </div>
        <IoCartOutline className="text-xl font-semibold" />
        <FaRegUserCircle className="text-xl font-semibold" />
      </div>
    </nav>
  );
};

export default Navbar;
