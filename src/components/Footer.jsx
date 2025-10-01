import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Send,
  Shield,
  Heart
} from "lucide-react";

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

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Case Studies", href: "#cases" },
  ];

  const resources = [
    { name: "Blog & Articles", href: "#blog" },
    { name: "Financial Calculators", href: "#calculators" },
    { name: "Tax Guides", href: "#guides" },
    { name: "Webinars", href: "#webinars" },
    { name: "Tools & Templates", href: "#tools" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Brand & Contact */}
            <div className="space-y-8">
              {/* Brand */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img
                    src="Logo.png"
                    alt="Astutepro Logo"
                    className="h-16 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    ASTUTEPRO
                  </h1>
                  <p className="text-sm uppercase text-emerald-300 font-medium tracking-wide">
                    Accountants & Tax Consultants
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                Your trusted partner for comprehensive financial solutions. 
                We deliver precision, compliance, and strategic insights to drive your business forward.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">123 Business District</p>
                    <p className="text-sm text-slate-400">Financial Street, Mumbai 400001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">+91 701 234 5678</p>
                    <p className="text-sm text-slate-400">Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium">connect@astutepro.in</p>
                    <p className="text-sm text-slate-400">We reply within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                  Our Services
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-all duration-200 group"
                      >
                        <ArrowRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {service.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                  Company
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-all duration-200 group"
                      >
                        <ArrowRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                  Resources
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {resources.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-all duration-200 group"
                      >
                        <ArrowRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          {/* <div className="border-t border-slate-700 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> */}
       
              {/* <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                <p className="text-slate-300 max-w-md">
                  Subscribe to our newsletter for the latest financial insights, tax updates, and business tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                  />
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Subscribe
                      <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </button>
                </div>
              </div> */}

              {/* Social Links */}
              {/* <div className="lg:text-right space-y-4">
                <h3 className="text-xl font-bold text-white">Connect With Us</h3>
                <p className="text-slate-300 lg:ml-auto lg:max-w-xs">
                  Follow us on social media for daily insights and updates.
                </p>
                <div className="flex space-x-4 lg:justify-end">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-emerald-500 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                      <social.icon 
                        size={20} 
                        className="text-slate-400 group-hover:text-white transition-colors duration-300" 
                      />
                    </a>
                  ))}
                </div>
              </div> */}
            {/* </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <span>&copy; {currentYear} AstutePro. All rights reserved.</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                <a href="#privacy" className="hover:text-emerald-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-emerald-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#cookies" className="hover:text-emerald-400 transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>

            {/* Made with love */}
            {/* <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>for our valued clients</span>
            </div> */}
          </div>

          {/* Mobile Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 sm:hidden">
            <a href="#privacy" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#cookies" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;