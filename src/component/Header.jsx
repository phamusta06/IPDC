import {   NavLink } from "react-router-dom";
import { Header__icon, glass } from "../helpers/helpers";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  
  const navList = [
    "RETAIL",
    "SME",
    "CORPORATE",
    "ABOUT US",
    "COVID 19",
    "CAMPAIGNS",
  ];

 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-100 ">
      <div className="container mx-auto max-w-[1200px] relative ">
        <div className="flex justify-between items-center md:p-5 px-2 py-6 sm:py-2">
          <div className="flex gap-2">
            <img src={Header__icon} className="w-28 object-cover" />
          </div>
           
          <div className="hidden lg:flex gap-10 pr-14">
            {navList.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase()}`}
                className="group relative inline-block tracking-[2px] font-bold text-[12px]"
              >
                {item}
                <span className="absolute h-7 bg-primary -bottom-1 -inset-x-2 rounded-sm scale-x-0 opacity-20 origin-left transition-all duration-700 group-hover:rounded-full group-hover:scale-x-100" />
              </NavLink>
            ))}
          </div>
   
          <div className="flex md:gap-8 gap-2 ml-7">
            <div className="flex items-center">
              <img
                src={glass}
                alt=""
                className="w-5 cursor-pointer md:flex  "
                onClick={toggleMenu}  
              />
            </div>
            
            <button className="bg-bg-button py-4 font-semibold text-xs tracking-[2px] px-7 md:flex hidden rounded-md text-white">
              iSSERVICE
            </button>
          
            <button className="md:hidden" onClick={toggleMenu}>

              <HiOutlineMenu size={30} />
            </button>
          </div>
        </div>
    {/*Mobile sidebar*/}
        {menuOpen && (
          <div className="md:hidden bg-white fixed inset-y-0 left-0 w-60 z-50 shadow-lg transition-all duration-500">
            <ul className="flex flex-col gap-4 mt-6">
            <img src={Header__icon} className="w-28 object-cover mx-4" />
              {navList.map((item, index) => (
                <li key={index} className="text-lg ml-6">
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    onClick={toggleMenu}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
