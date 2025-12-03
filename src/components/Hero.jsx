import React from "react";
import { Calculator, FileText, PieChart, Shield, TrendingUp, Users, Target, Globe, Lightbulb, ArrowRight, Star, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BookText, Landmark, Briefcase, Eye, Settings2 } from 'lucide-react';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
    </>
  );
}

function Hero() {
  const services = [
    { name: "Book Keeping", angle: 0, color: "from-emerald-500 to-emerald-600", icon: <BookText size={24} /> },
    { name: "VAT Services", angle: 60, color: "from-green-500 to-green-600", icon: <Landmark size={24} /> },
    { name: "Corporate Tax", angle: 120, color: "from-teal-500 to-teal-600", icon: <Briefcase size={24} /> },
    { name: "Auditing", angle: 180, color: "from-lime-500 to-lime-600", icon: <Eye size={24} /> },
    { name: "Business Services", angle: 240, color: "from-cyan-500 to-cyan-600", icon: <Lightbulb size={24} /> },
    { name: "Softwares", angle: 300, color: "from-sky-500 to-sky-600", icon: <Settings2 size={24} /> },
  ];

  return (
    <section className="relative min-h-dvh flex items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 text-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated Blobs - Smaller on mobile */}
      <div className="absolute top-10 right-10 w-48 h-48 lg:top-20 lg:right-20 lg:w-96 lg:h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 lg:bottom-20 lg:left-20 lg:w-80 lg:h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-4 lg:space-y-6">
              {/* Responsive Text */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-4xl font-extrabold leading-tight text-center lg:text-left">
                <span className="fade-in-text block bg-gradient-to-r from-emerald-800 to-gray-900 text-transparent bg-clip-text">
                  EMPOWERING
                {/* </span> */}
                &nbsp;
                {/* <span className="fade-in-text delay-300 block bg-gradient-to-r from-gray-800 via-emerald-800 to-gray-800 text-transparent bg-clip-text"> */}
                  BUSINESS...
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                <div className="h-1 w-12 lg:w-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
                <p className="text-sm sm:text-base lg:text-lg text-emerald-700 font-semibold tracking-wider">
                  METICULOUSLY · CONSISTENTLY · SWIFTLY
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed text-justify max-w-2xl">

              Navigate complex tax regulations and optimize your financial strategy with our comprehensive 
              accounting services. We deliver precision, compliance, and peace of mind.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                to="/services"
                className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 text-sm lg:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                  View Our Services
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right - Service Visualization - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] flex items-center justify-center">
              {/* Background Rings */}
              <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-400/10 via-green-400/10 to-sky-400/10 backdrop-blur-sm"></div>
              <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-emerald-400/30 animate-pulse"></div>
              <div className="absolute w-48 h-48 lg:w-60 lg:h-60 rounded-full border border-green-400/20 animate-pulse delay-500"></div>

              {/* Central Hub */}
              <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-xl border border-emerald-400/40 rounded-full shadow-2xl animate-float">
                <img
                  src="customer-service.png"
                  alt="ERP Service Logo"
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-md"
                />
              </div>

              {/* Service Bubbles */}
              {services.map((service, idx) => {
                const radius = 220;
                const containerSize = 500;
                const center = containerSize / 2;
                const angleRad = (service.angle * Math.PI) / 180;
                const x = center + radius * Math.cos(angleRad);
                const y = center + radius * Math.sin(angleRad);

                return (
                  <React.Fragment key={idx}>
                    {/* Connection Line */}
                    <svg className="absolute top-0 left-10 w-full h-full pointer-events-none" style={{ transform: "scale(1)" }}>
                      <line
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="rgba(16, 185, 129, 0.3)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    {/* Bubble */}
                    <div
                      className={`absolute z-10 flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${service.color} rounded-3xl shadow-xl border border-white/30 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-2xl group`}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-10%, -50%)",
                      }}
                    >
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className="text-xs font-semibold text-white text-center mt-1 px-1 leading-tight">
                        {service.name}
                      </span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .fade-in-text {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }
        .fade-in-text.delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}

// Enhanced About Preview Section
function AboutPreview() {
  const highlights = [
    {
      icon: <Star className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "99% Satisfaction",
      description: "Consistently exceeding client expectations"
    },
    {
      icon: <Globe className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: "Global Standards",
      description: "International expertise with local understanding"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs lg:text-sm font-semibold">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-500 rounded-full"></div>
                ABOUT ASTUTEPRO
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                Your Trusted Financial Partner
              </h2>
              <div className="h-1 w-16 lg:w-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>

            <p className="text-base lg:text-lg text-slate-700 leading-relaxed text-justify">
              At <strong>AstutePro</strong>, we are a team of seasoned professionals with over a decade of expertise 
              in accounts, taxation, audit, and financial management. We provide end-to-end solutions tailored 
              to your unique business needs.
            </p>

            <p className="text-base lg:text-lg text-slate-700 leading-relaxed text-justify">
              Our commitment to precision, integrity, and client success has made us the preferred choice for 
              businesses seeking reliable financial guidance and strategic insights.
            </p>

            {/* Highlights Grid for Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                    {highlight.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{highlight.title}</h3>
                  <p className="text-xs text-slate-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Vision & Mission Cards */}
          <div className="space-y-4 lg:space-y-6">

            {/* Vision Card */}
            <div className="group p-6 lg:p-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-emerald-100 leading-relaxed text-sm lg:text-base text-justify">
                To be the most trusted and innovative provider of accounting and tax services, recognized for 
                delivering excellence and fostering client growth.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm lg:text-base text-justify">
                To provide accounting, tax, and finance services with precision, transparency, and integrity, 
                creating lasting value for our clients and their businesses.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Enhanced Services Preview Section
function ServicesPreview() {
  const featuredServices = [
    {
      icon: <Calculator className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive financial record management and reporting",
      features: ["Daily Bookkeeping", "Financial Statements", "Bank Reconciliation"],
      color: "from-emerald-500 to-emerald-600"
    },
{
  icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />,
  title: "Corporate Tax Services",
  description:
    "Reliable Corporate Tax compliance, registration, and return filing for businesses of all sizes.",
  features: [
    "Corporate Tax Registration",
    "Taxable Income Calculation",
    "CIT Return Preparation & Filing",
  ],
  color: "from-green-500 to-green-600"
},

    {
      icon: <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "VAT Services",
      description: "Complete tax planning, filing, and advisory services",
      features: ["Tax Planning", "Return Filing", "Tax Advisory"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <PieChart className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Business Consultancy",
      description: "Strategic business consulting for growth and optimization",
      features: ["Strategic Planning", "Process Optimization", "Growth Strategy"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-xs lg:text-sm font-semibold mb-4 lg:mb-6">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full"></div>
            OUR SERVICES
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Comprehensive Business Solutions
          </h2>
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="h-1 w-16 lg:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
          </div>
          <p className="text-base lg:text-xl text-slate-300 leading-relaxed text-justify px-4">

            End-to-end professional services designed to optimize your financial operations, 
            ensure compliance, and drive sustainable business growth.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 lg:p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-xs lg:text-sm mb-3 lg:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 lg:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-400 text-xs">
                      <CheckCircle size={10} className="text-emerald-400 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 lg:gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 text-sm lg:text-base"
          >
            Explore All 10+ Services
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// New Why Choose Us Section
function WhyChooseUs() {
  const reasons = [
    {
      icon: <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Expert Team",
      description: "Certified professionals with decade-long experience in financial services"
    },
    {
      icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "100% Confidential",
      description: "Your data and business information are completely secure with us"
    },
    {
      icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure timely completion of all projects"
    },
    {
      icon: <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Cost Effective",
      description: "Premium quality services at competitive and transparent pricing"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 lg:mb-6">
            Why Choose AstutePro?
          </h2>
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="h-1 w-16 lg:w-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
          </div>
          <p className="text-base lg:text-xl text-slate-700 leading-relaxed text-justify px-4">

            We stand out through our commitment to excellence, client-centric approach, 
            and unwavering dedication to your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group text-center p-6 lg:p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4">{reason.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm lg:text-base">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 text-sm lg:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;