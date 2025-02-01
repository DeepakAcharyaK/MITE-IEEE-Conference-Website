import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Conference Name */}
          <div className="flex items-center">
            <img
              src="/images/mite-logo.jpg" // Replace with your logo path
              alt="MITE Logo"
              className="h-10 w-10"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">
              IEEE International Conference
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/tracks"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Tracks
            </a>
            <a
              href="https://mite.ac.in/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/tracks"
              className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Tracks
            </a>
            <a
              href="https://mite.ac.in/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;