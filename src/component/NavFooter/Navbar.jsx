import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [itemActive, setItemActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [isDropdown, setDropdown] = useState(false);

  /*
    THIS IS FOR NAVBAR SCROLL ANIMATION
  */
  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

  /*
     FOR OPENING SIDE BAR
  */

  const openSideBar = () => {
    setOpen(!open);
    setActive(!active);
  };

  /*
     FOR CLOSING SIDEBAR AND ADDING ACTIVE COLOR IN NAV LINK
  */

  const closeNavFun = (value) => {
    setActive(false);
    setActiveLink(value);
    window.scrollTo({
      top: 0,
    });
  };

  const navClickFunc = (value) => {
    setActiveLink(value);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <nav
      className={`navbar md:px-[40px] px-[20px] z-20 w-full h-[80px] flex items-center justify-between  absolute top-0 left-0 ${
        scrollAnimation ? "nav-scroll shadow " : " "
      }`}
    >
      <div className="logo py-3">
        <Link
          to="/"
          className="flex items-center flex-wrap gap-x-8"
          onClick={() => navClickFunc("img")}
        >
          <img
            src="/image/logo.png"
            className="w-[150px] h-auto object-cover"
            alt=""
          />
          <img
            src="/image/sublogo.png"
            className="w-[55px] h-auto object-cover"
            alt=""
          />
        </Link>
      </div>
      {/* LARGE SCREEN NAV-LINKS */}
      <div className="links_section lg:block hidden">
        <ul className="list-none flex items-center xl:gap-x-8 gap-x-6">
          <li>
            
            <Link
              to="/"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "home" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("home")}
            >
              home
            </Link>
          </li>
          <li>
            
            <Link
              to="/about"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "about" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("about")}
            >
              about
            </Link>
          </li>
          <li>
            
            <Link
              to="/location"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "location" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("location")}
            >
              locations
            </Link>
          </li>
          <li>
            
            <Link
              to="/ajfc"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "ajfc" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("ajfc")}
            >
              ajfc
            </Link>
          </li>
          <li>
            
            <Link
              to="/store"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "store" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("store")}
            >
              our store
            </Link>
          </li>
          <li>
            
            <Link
              to="/contact"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "contact" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("contact")}
            >
              contact us
            </Link>
          </li>
          <li>
            
            <Link
              to="/hospitality"
              className={`uppercase text-[16px] font-primary font-semibold transition duration-500 hover:text-sky-500 ${
                activeLink === "hospitality" ? "text-red" : "text-white"
              }`}
              onClick={() => navClickFunc("hospitality")}
            >
              hospitality
            </Link>
          </li>
          <li>
            
            <button className="btn-primary">
              Learn more{" "}
              <MdOutlineKeyboardDoubleArrowRight className="ms-1 text-[20px]" />
            </button>
          </li>
        </ul>
      </div>
      {/* ANIMATED HAMBURGER */}
      <div className="lg:hidden">
        <button
          type="button"
          className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
          onClick={openSideBar}
        >
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.4px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open ? " opacity-0" : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                : ""
            }`}
          ></span>
        </button>
      </div>

      {/*
        SIMPLE HAMBURGER
      <button
        className={`menu lg:hidden block text-[20px] text-[#43525B] p-2 border border-[#43525B] transition duration-300 ${active ? " focus:border-sky-500 focus:text-sky-500" : ""
          } `}
        onClick={() => setActive(!active)}
      >
        <FaBarsStaggered />
      </button> 
      */}

      {/* SMALL SCREEN NAV-LINKS */}
      <div
        className={`mobile_menu lg:hidden block absolute top-0 bg-white shadow-lg  w-[90%] h-screen z-50 duration-300 bg-blue-500 px-4 pt-4 left-[50%] translate-x-[-50%] ${
          active
            ? "top-[4rem] max-h-[400px] opacity-100 "
            : "top-[4rem] max-h-[0px] opacity-0"
        } `}
      >
        {/* LNIKS SECTION */}
        <div className="w-full flex items-start justify-start flex-col pt-[20px] ">
          <ul className="list-none flex items-center justify-center flex-col gap-4 w-full   ">
            <li>
              <Link
                to="/about"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${
                  activeLink === "about" ? "text-sky-500" : "text-slate-500"
                }`}
                onClick={() => {
                  closeNavFun("about");
                  setOpen(false);
                }}
              >
                about
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "home" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("home")}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "about" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("about")}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "location" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("location")}
              >
                locations
              </Link>
            </li>
            <li>
              <Link
                to="/ajfc"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "ajfc" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("ajfc")}
              >
                ajfc
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "store" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("store")}
              >
                our store
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "contact" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("contact")}
              >
                contact us
              </Link>
            </li>
            <li>
              <Link
                to="/hospitality"
                className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                  activeLink === "hospitality" ? "text-red" : "text-white"
                }`}
                onClick={() => navClickFunc("hospitality")}
              >
                hospitality
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
