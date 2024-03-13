import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollAnimation, setScrollAnimation] = useState(false);

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
    setOpen(false);
    setActiveLink(value);
    setActiveLink(value);
    window.scrollTo({
      top: 0,
    });
  };

  const navClickFunc = (value) => {
    setActiveLink(value);
    setOpen(false);
    setActive(false);
    window.scrollTo({
      top: 0,
    });
  };

  const navItems = [
    "home",
    "about",
    "locations",
    "ajfc",
    "our store ",
    "contact us",
    "hospitality",
  ];

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
          {navItems.map((element, index) => {
            return (
              <li key={index}>
                <Link
                  to={`/${element === "home" ? "" : element}`}
                  className={`uppercase text-[15px] font-primary font-semibold transition duration-500 hover:text-red ${
                    activeLink === element ? "text-red" : "text-white"
                  }`}
                  onClick={() => navClickFunc(element)}
                >
                  {element}
                </Link>
              </li>
            );
          })}

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
            {navItems.map((element, index) => {
              return (
                <li>
                  <Link
                    to={`/${element === "home" ? "" : element}`}
                    className={`uppercase text-[16px] font-primary font-bold transition duration-500 hover:text-sky-500 ${
                      activeLink === element ? "text-red" : "text-black"
                    }`}
                    onClick={() => navClickFunc(element)}
                  >
                    {element}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
