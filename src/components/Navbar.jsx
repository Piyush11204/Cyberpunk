import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/" className="hover:text-teal-300">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/projects" className="hover:text-teal-300">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-teal-300">
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-teal-300 hover:text-teal-500 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {dropdownOpen && (
          <div className="md:hidden bg-teal-800 py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-teal-600">
              Home
            </Link>
            <Link to="/projects" className="block px-4 py-2 hover:bg-teal-600">
              Projects
            </Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-teal-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
