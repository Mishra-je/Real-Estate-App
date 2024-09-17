import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaCircleXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogelMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const CloseMenu = () => {
    setIsMenuOpen(false);
  };

  const NavItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contract",
    },
  ];
  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : "light bg-[#f3f3f3] "
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30  `}
    >
      <div>
        <img
          src={logo}
          alt="compony-logo"
          className=" lg:w-[150px] w-[120px] dark:invert  "
        />
      </div>
      <div className=" flex justify-center items-center lg:gap-8 gap-2 " >
       <div className=" flex justify-center items-center lg:gap-3 gap-1 " ></div>
        <FaPhoneAlt className=" size-5 text-red-600  " />
        <h1 className=" lg:text-xl text-sm text-black font-semibold dark:text-white " >930 234 0923</h1>
        <FaUserCircle className=" size-6 text-red-600 " / >
       </div>
       
      <ul className=" lg:flex justify-center items-center gap-8 hidden  " >
       {
        NavItems.map(({link,path}) => {
            return(
                <Link key={path} className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2  dark:text-white rounded-lg hover:bg-red-600 hover:text-white ' to={path} spy={true}  offset={-100}  smooth={true}  >{link}</Link>  
            )
          
        })
       }
      </ul>

      {/* mobile menu icons */}
       <div className=" flex justify-center items-center lg:hidden   " onClick={toogelMenu} >
       <div>
       {
        
        isMenuOpen ? <FaCircleXmark className=" text-black dark:text-white text-2xl cursor-pointer "  /> : <FaBars className=" text-black dark:text-white text-2xl cursor-pointer "   />}
       </div>
       </div>
       
       <div className={`${isMenuOpen ? 'flex ' : 'hidden' } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0  `} onClick={CloseMenu} >
        <ul className=" flex flex-col justify-center items-center gap-2 w-full " >
        {
        NavItems.map(({link,path}) => {
            return(
                <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 hover:bg-red-600 hover:text-black w-full text-center  ' to={path} spy={true}  offset={-100}  smooth={true}  >{link}</Link>  
            )
          
        })
       }
        </ul>
       </div>
      
    </nav>
  );
};

export default Header;
