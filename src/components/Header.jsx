import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Who We Are", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN ROW */}
        <div className="flex items-center justify-between py-4">
          
          {/* LOGO */}
 <Link to="/" className="flex items-center gap-1">
  <img
    src="/Logo1.png"
    alt="AstutePro Logo"
    className="h-12 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide font-[Montserrat] text-slate-900">
      <span className="text-gray-700 ">
        Astute
      </span>
      <span className="bg-gradient-to-r from-emerald-700 to-green-600 text-transparent bg-clip-text ">Pro</span>
    </h1>

    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-[Inter] text-slate-600">
      Accounts • Tax • IT
    </p>
  </div>
</Link>



          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative text-[15px] font-medium transition duration-300 ${
                  isActive(item.to)
                    ? "text-emerald-600"
                    : "text-slate-700 hover:text-emerald-600"
                }`}
              >
                {item.name}

                {/* Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${
                    isActive(item.to)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden shadow-inner transition-all duration-300 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t border-slate-200 px-4 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition ${
                isActive(item.to)
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
