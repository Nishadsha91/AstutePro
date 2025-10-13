import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Tax Planning & Compliance", href: "#tax" },
    { name: "Audit & Assurance", href: "#audit" },
    { name: "Business Advisory", href: "#advisory" },
    { name: "Financial Consulting", href: "#financial" },
    { name: "ERP Implementation", href: "#erp" },
    { name: "HR Solutions", href: "#hr" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-12">
        
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
          {/* Brand Column */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4 group">
              <img
                src="Logo.png"
                alt="AstutePro"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h1 className="text-2xl font-bold group-hover:text-emerald-400 transition">
                  ASTUTEPRO
                </h1>
                <p className="text-xs text-emerald-300 uppercase font-semibold tracking-widest">
                  Accountants & Tax Consultants
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Trusted partner for your business growth with expert financial insights and
              strategic planning.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1" size={16} />
                <span className="text-slate-300">
                  Block B-B50-143, Sharjah Research Technology and Innovation Park, Sharjah, U.A.E
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-emerald-400" size={16} />
                <span className="text-slate-300">+971 56 430 5634</span>
                <span className="text-slate-300">+971 56 392 9645</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-emerald-400" size={16} />
                <span className="text-slate-300">connect@astutepro.ae</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Our Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href={service.href}
                    className="flex items-center group text-slate-300 hover:text-white transition-all"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition"
                    />
                    <span className="group-hover:translate-x-1 transition">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: unchanged */}
        <div className="mt-10 border-t border-slate-700 pt-5 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} AstutePro. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="#privacy" className="hover:text-emerald-400 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-emerald-400 transition">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-emerald-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
