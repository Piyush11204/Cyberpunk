import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { Menu, LogOut, User } from "lucide-react";

const Navbar = () => {
  const auth = getAuth();
  const location = useLocation(); // To get the current route
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Determine Navbar color based on the current route
  const getNavbarColor = () => {
    if (location.pathname === "/login") {
      return "from-teal-700";
    } else if (location.pathname === "/signup") {
      return "from-indigo-600";
    }
    return "from-teal-500"; // Default color
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        setUser(null);
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav className={`bg-gradient-to-r ${getNavbarColor()} to-teal-900  text-white shadow-lg`}>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 text-xl font-bold">Cyberpunk</div>

          {/* Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-teal-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-teal-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-teal-300">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="relative">
            {user ? (
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <User size={20} />
                <span>{user.email}</span>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-md text-white font-medium"
              >
                Login
              </Link>
            )}

            {/* Dropdown Menu */}
            {dropdownOpen && user && (
              <div className="absolute right-0 mt-2 w-48 bg-teal-800 rounded-md shadow-lg py-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-teal-600"
                >
                  <LogOut size={18} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-teal-300 hover:text-teal-500 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {dropdownOpen && (
        <div className="md:hidden bg-teal-800 py-2">
          <Link to="/" className="block px-4 py-2 hover:bg-teal-600">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-teal-600">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-teal-600">
            Contact
          </Link>
          {user && (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-teal-600"
            >
              <LogOut size={18} className="inline-block mr-2" /> Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
