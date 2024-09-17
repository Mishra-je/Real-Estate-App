import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { MdMarkEmailUnread } from "react-icons/md";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-black"
        } w-full m-auto lg:px-20 px-10 py-20 lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10  `}
      >
        <div className=" flex flex-col justify-center items-start gap-5 ">
          <h1 className=" dark:text-white text-2xl font-semibold text-white ">
            About us
          </h1>
          <p className=" text-justify text-slate-200 ">
            Ut non eros nunc. Vivamus eget sem interdum, sodales diam et,
            euismod sapien. Nulla facilisi. Duis vel lectus auctor, viverra
            lorem ac, ultrices metus.
          </p>

          <div
            id="social-icons"
            className=" flex justify-start items-center gap-4 mt-4 "
          >
            <div className=" p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform  ">
              <FaFacebook className="size-5 " />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform  ">
              <FaInstagram className="size-5 " />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform  ">
              <FaTwitter className="size-5 " />
            </div>
            <div className=" p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform  ">
              <FaYoutube className="size-5 " />
            </div>
          </div>
          <h1 className="text-white">
            Copyright Real Estate ,All Rights Researved
          </h1>
        </div>

        <div className=" flex flex-col justify-center items-start gap-5  ">
          <h1 className=" text-white text-2xl font-semibold">Contact Us</h1>

          <div className=" flex justify-center items-center gap-3  ">
            <FaBuilding className=" text-white size-5  " />
            <p className="text-slate-200">
              uisque placerat metus sapien, viverra semper ipsum commodo vel.{" "}
            </p>
          </div>
          <div className=" flex justify-center items-center gap-3  ">
            <FaMobile className=" text-white size-5  " />
            <p className="text-slate-200"> +984 2902 2021 </p>
          </div>
          <div className=" flex justify-center items-center gap-3  ">
            <FaFax className=" text-white size-5  " />
            <p className="text-slate-200">3534 432566 </p>
          </div>
          <div className=" flex justify-center items-center gap-3  ">
            <MdMarkEmailUnread className=" text-white size-5  " />
            <p className="text-slate-200"> Sachin@gmail.com</p>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className=" text-white text-2xl font-semibold  ">
            Latest Properties
          </h1>
          <div className=" flex justify-center items-center gap-4  ">
            <img
              src={prop7}
              alt=""
              className=" w-[120px] rounded-lg  transform hover:scale-110 cursor-pointer transition-transform duration-300 "
            ></img>
            <div>
              <h1 className=" text-lg text-white ">Ville with amazing view</h1>
              <p className=" text-slate-400  ">$ 287.98</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4  ">
            <img
              src={prop8}
              alt=""
              className=" w-[120px] rounded-lg  transform hover:scale-110 cursor-pointer transition-transform duration-300 "
            ></img>
            <div>
              <h1 className=" text-lg text-white ">Smart view from beach </h1>
              <p className=" text-slate-400  ">$ 587.67</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide to top-bottom */}

      <div id="icon-box" className=" bg-red-600 p-4 cursor-pointer fixed lg:bottom-12 rounded-full hover:bg-black bottom-6 right-6 lg:right-6  " >
            <Link to="hero" spy={true} offset={-100} smooth={true} >
                <FaArrowUp  className=" size-6   " />
            </Link>
      </div>

      {/* darkmode toggle button seciton */}
      <div>
        <button onClick={toggleDarkMode} className=" flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6 "  >
            {
                darkMode ? <FaMoon size={25} className=" text-black " /> : <FaSun size={25} className="text-black" /> 
            }
        </button>
      </div>
    </>
  );
};

export default Footer;
