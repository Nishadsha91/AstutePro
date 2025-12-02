import React from "react";
import { MapPin, Phone, ArrowRight } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  // All services from your image
const services = [
  { name: "Accounting & Bookkeeping", href: "/accounting-service" },
  { name: "Audit & Internal Audit", href: "/auditing-service" },
  { name: "MIS, Budgeting & Product Costing", href: "/mis-budget-service" },
  { name: "Value Added Tax Services", href: "/vat-service" },
  { name: "Payroll Services", href: "/payroll-service" },
  { name: "ERP & Accounting Softwares", href: "/erp-service" },
  { name: "Corporate Tax Services", href: "/corporate-service" },
  { name: "Inventory & Fixed Asset Verification", href: "/inventory-service" },
  { name: "Web & App Development", href: "/web-service" },
  { name: "Business Setup Services", href: "/business-service" },
  { name: "ESR & AML Compliance", href: "/esr-service" },  // ✔ FIXED
];


  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Brand Column - Left Side */}
          <div>
            <div className="flex items-center space-x-3 mb-6 group">
  <img
    src="/Logo1.png"
    alt="AstutePro Logo"
    className="h-12 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide font-[Montserrat] text-slate-900">
      <span className="text-slate-200 ">
        Astute
      </span>
      <span className="bg-gradient-to-r from-emerald-700 to-green-600 text-transparent bg-clip-text ">Pro</span>
    </h1>

    <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-[Inter] text-slate-600">
      Accounts • Tax • IT
    </p>
  </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="text-emerald-400 mt-1 mr-3 flex-shrink-0" size={16} />
                <span className="text-slate-300">
                  Block B-B50-143, Sharjah Research Technology and Innovation Park, <br />Sharjah, U.A.E
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-emerald-400 mr-3 flex-shrink-0" size={16} />
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <span className="text-slate-300">+971 56 430 5634</span>
                  <span className="text-slate-300">+971 56 392 9645</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column - Right Side */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {services.map((service, i) => (
                <a
                  key={i}
                  href={service.href}
                  className="flex items-center group text-slate-300 hover:text-white transition-all hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="mr-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition flex-shrink-0"
                  />
                  <span className="text-sm group-hover:text-emerald-200 transition-colors">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} AstutePro. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a href="/privacy-policy" className="hover:text-emerald-400 transition hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-emerald-400 transition hover:underline">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-emerald-400 transition hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;