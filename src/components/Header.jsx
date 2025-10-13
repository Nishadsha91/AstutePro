import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Who We Are", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white rounded-b-xl  backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <img
                src="Logo.png"
                alt="Astutepro Logo"
                className="h-11 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
<h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 font-[Raleway] tracking-wide group-hover:text-blue-600 transition-colors">
  ASTUTEPRO
</h1>
<p className="text-xs sm:text-sm uppercase text-gray-600 font-[Raleway] font-medium tracking-wider">
  ACCOUNTS | TAX | IT
</p>



            </div>
          </Link>

{/* Desktop Menu */}
<nav className="hidden lg:flex items-center gap-6">
  {menuItems.map((item) => (
    <div key={item.name} className="relative group">
      <Link
        to={item.to}
        className={`px-1 py-2 font-medium transition-colors duration-300 ${
          isActive(item.to)
            ? "text-blue-600" 
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        <span
          className={`relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[1.5px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full`}>
          {item.name}
        </span>
      </Link>
    </div>
  ))}
</nav>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive(item.to)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
