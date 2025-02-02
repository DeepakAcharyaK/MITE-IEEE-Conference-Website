import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null); // Close dropdown when menu is closed
  };

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/#about" },
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
    { name: "Important Dates", link: "/important-dates" },
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
    <nav className="bg-white shadow-md fixed w-full  z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 p-2">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src="/images/mite-logo.jpg" alt="MITE Logo" className="h-12 w-12" />
            <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-5" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-8">
              {menuItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.subLinks ? (
                    <div
                      className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-blue-600 text-sm font-medium transition duration-300"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      {openDropdown === item.name ? <RiArrowUpSLine className="text-sm" /> : <RiArrowDownSLine className="text-sm" />}
                    </div>
                  ) : (
                    <Link to={item.link} className="text-gray-800 hover:text-blue-600 text-sm font-medium transition duration-300">
                      {item.name}
                    </Link>
                  )}
                  {item.subLinks && openDropdown === item.name && (
                    <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 w-48">
                      {item.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subLink.link} className="block px-4 py-2 text-gray-800 hover:text-blue-600 text-sm font-medium transition duration-300">
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-3xl focus:outline-none">
              {isMenuOpen ? <RiCloseFill className="text-gray-800" /> : <HiMenuAlt3 className="text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={closeMenu}>
        <div
          className={`w-64 bg-white h-full transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
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
                <li key={index}>
                  {item.subLinks ? (
                    <div>
                      <div className="flex items-center justify-between text-gray-800 hover:text-blue-600 text-sm font-medium py-2 px-3 rounded-md transition duration-300 cursor-pointer" onClick={() => toggleDropdown(item.name)}>
                        <span>{item.name}</span>
                        {openDropdown === item.name ? <RiArrowUpSLine className="text-sm" /> : <RiArrowDownSLine className="text-sm" />}
                      </div>
                      {openDropdown === item.name && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link to={subLink.link} className="block text-gray-800 hover:text-blue-600 text-sm font-medium py-1 px-3 rounded-md transition duration-300" onClick={closeMenu}>
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={item.link} className="block text-gray-800 hover:text-blue-600 text-sm font-medium py-2 px-3 rounded-md transition duration-300" onClick={closeMenu}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Notification Bar */}
      <div className="notification w-full h-8 bg-blue-100 flex item-center">
        <marquee behavior="scroll" direction="left">
          <h1>Important Notifications go here - 2025</h1>
        </marquee>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
