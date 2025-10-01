import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Mail, Phone, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const location = useLocation(); // To detect active page

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBar(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Who We Are", to: "/about" },
    {name: "Services",to:'/services'},
    { name: "Contact", to: "/contact" },
  ];

  // Function to check if menu item is active
  const isActive = (to) => {
    return location.pathname === to;
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Info Bar */}

{location.pathname !== "/contact" && (
  <div
    className={`hidden md:block bg-gray-800 text-white text-sm transition-all duration-300 ${
      showTopBar
        ? "opacity-100 h-auto py-2"
        : "opacity-0 h-0 py-0 pointer-events-none overflow-hidden"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex space-x-6 text-gray-300">
        <a href="mailto:connect@astutepro.in" className="flex items-center hover:text-white transition">
          <Mail size={16} className="mr-1 text-blue-300" />
          connect@astutepro.in
        </a>
        <a href="tel:+917012345678" className="flex items-center hover:text-white transition">
          <Phone size={16} className="mr-1 text-blue-300" />
          +91 701 234 5678
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-300">
          <Clock size={16} className="mr-1 text-blue-300" />
          Mon-Fri: 9:00 AM - 5:00 PM
        </div>
        <div className="flex space-x-3 text-gray-300">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <Facebook size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <Twitter size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-md"
        } ${showTopBar ? "rounded-b-xl" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src="Logo.png"
                  alt="Astutepro Logo"
                  className="h-11 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  ASTUTEPRO
                </h1>
                <p className="text-xs sm:text-sm uppercase text-gray-600 font-medium tracking-wide">
                  Accountants & Tax Consultants
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <button
                        className={`flex items-center gap-1 px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                          activeDropdown === index
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                          to={item.to}
                          className={`flex items-center gap-1 px-4 py-2 font-medium border-b-2 border-transparent transition-all duration-200 ${
                            isActive(item.to)
                              ? "border-blue-600 text-blue-600"
                              : "text-gray-700 hover:border-blue-600 hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </Link>

                    )}

                    {/* Desktop Dropdown */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden animate-fadeIn">
                        <div className="py-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.to}
                              className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-l-4 border-transparent hover:border-blue-600 ${
                                isActive(sub.to) ? "text-blue-600 bg-blue-50 border-blue-600" : ""
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-colors duration-200 ${
                            activeDropdown === index ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          }`}
                          onClick={() =>
                            setActiveDropdown(activeDropdown === index ? null : index)
                          }
                        >
                          {item.name}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeDropdown === index ? "max-h-48 mt-1" : "max-h-0"
                          }`}
                        >
                          <ul className="ml-4 space-y-1 py-1">
                            {item.dropdown.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  to={sub.to}
                                  className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                                    isActive(sub.to)
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                          to={item.to}
                          className={`block px-4 py-3 font-medium border-b-2 border-transparent transition-all duration-200 ${
                            isActive(item.to)
                              ? "border-blue-600 text-blue-600"
                              : "text-gray-700 hover:border-blue-600 hover:text-blue-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>

                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        `}</style>
      </div>
    </header>
  );
}

export default Header;
