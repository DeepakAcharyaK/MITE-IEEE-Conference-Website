import '../stylesheets/Navbar.css'
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const menuItems = [
    { name: "Home", link: "/#home" },
    { name: "About Clg", link: "/#about" },
    { name: "About CSITSS", link: "/#about" },
    {
      name: "Committee",
      link: "/committee",
      subLinks: [
        { name: "Organizing Committee", link: "/organizing-committee" },
        { name: "Technical Committee", link: "/technical-committee" },
        { name: "Advisory Committee", link: "/advisory-committee" },
      ],
    },
    { name: "Conference", link: "/conference" },
    { name: "Important Dates", link: "/#impdate" },
    {
      name: "Call for Papers",
      link: "/call-for-papers",
      subLinks: [
        { name: "Submission Guidelines", link: "/submission-guidelines" },
        { name: "Paper Format", link: "/paper-format" },
        { name: "Review Process", link: "/review-process" },
      ],
    },
    { name: "Tracks", link: "/tracks" },
    { name: "Registration", link: "/registration" },
    { name: "Contact", link: "/contacts" },
  ];

  return (
    <div className="nav-container w-full h-20">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 p-2">
            <div className="flex items-center gap-2">
              <img src="/images/mite-logo.jpg" alt="MITE Logo" className="h-12 w-12" />
              <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-5" />
            </div>
            <div className="hidden md:flex items-center">
              <ul className="flex gap-8 ">
                {menuItems.map((item, index) => (
                  <li key={index} className="menu-items relative text-xl font-semibold">
                    {item.subLinks ? (
                      <div
                        className={`flex items-center gap-1 cursor-pointer text-xl text-gray-800 hover:text-red-600 transition duration-300 ${openDropdown === item.name ? 'font-bold' : ''}`}
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        {openDropdown === item.name ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                      </div>
                    ) : (
                      <Link to={item.link} className={`text-gray-800 hover:text-red-600 text-xl font-semibold transition duration-300`}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-3xl focus:outline-none">
                {isMenuOpen ? <RiCloseFill className="text-gray-800" /> : <HiMenuAlt3 className="text-gray-800" />}
              </button>
            </div>
          </div>
        </div>
        <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={closeMenu}>
          <div
            className={`w-64 bg-white h-full transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img src="/images/mite-logo.jpg" alt="MITE Logo" className="h-10 w-10" />
                  <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-4" />
                </div>
                <button onClick={closeMenu} className="text-2xl focus:outline-none">
                  <RiCloseFill className="text-gray-800" />
                </button>
              </div>
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index} >
                    <Link to={item.link} className=" menu-items block text-gray-800 hover:text-red-600 text-xl font-semibold hover:text-4xl py-2 px-3 rounded-md transition duration-300" onClick={closeMenu}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-white notification w-full h-8 flex item-center">
          <marquee behavior="scroll" direction="left">
            <h1 className='text-red-600 font-bold text-xl'>Registration closes on 21-03-2025</h1>
          </marquee>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;