import React from "react";
import { Calculator, FileText, PieChart, Shield, TrendingUp, Users, Target, Globe, Lightbulb, ArrowRight, Star, CheckCircle,Clock } from "lucide-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      {/* About Preview */}
      <AboutPreview />
      {/* Services Preview */}
      <ServicesPreview />
      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
}

function Hero() {
  const services = [
    { name: "Production", angle: 0, color: "from-emerald-500 to-emerald-600", icon: <Calculator size={24} /> },
    { name: "Logistic", angle: 60, color: "from-green-500 to-green-600", icon: <Shield size={24} /> },
    { name: "Sales", angle: 120, color: "from-teal-500 to-teal-600", icon: <PieChart size={24} /> },
    { name: "Human Resources", angle: 180, color: "from-lime-500 to-lime-600", icon: <Users size={24} /> },
    { name: "Finance", angle: 240, color: "from-cyan-500 to-cyan-600", icon: <FileText size={24} /> },
    { name: "Management", angle: 300, color: "from-sky-500 to-sky-600", icon: <TrendingUp size={24} /> },
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

      {/* Animated Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-23 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left - Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-6xl font-bold leading-tight text-slate-900">
                Your Reliable Partner for Business
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
                <p className="text-lg sm:text-xl text-emerald-700 font-semibold tracking-wider">
                  METICULOUSLY · CONSISTENTLY · SWIFTLY
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Navigate complex tax regulations and optimize your financial strategy with our comprehensive 
              accounting services. We deliver precision, compliance, and peace of mind.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Schedule Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <Link
                to="/services"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 hover:border-emerald-500 transition-all duration-300 text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right - Service Visualization */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] flex items-center justify-center">
              {/* Background Rings */}
              <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-400/10 via-green-400/10 to-sky-400/10 backdrop-blur-sm"></div>
              <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-emerald-400/30 animate-pulse"></div>
              <div className="absolute w-48 h-48 lg:w-60 lg:h-60 rounded-full border border-green-400/20 animate-pulse delay-500"></div>

              {/* Central Hub */}
              <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-xl border border-emerald-400/40 rounded-full shadow-2xl animate-float">
                <div className="text-2xl lg:text-3xl font-bold text-emerald-700">ERP</div>
                <div className="text-xs text-emerald-600 text-center mt-1 leading-tight">
                  Enterprise Resource <br />Planning
                </div>
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

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Enhanced About Preview Section
function AboutPreview() {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "10+ Years Experience",
      description: "Decade of excellence in financial services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "99% Satisfaction",
      description: "Consistently exceeding client expectations"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "International expertise with local understanding"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                ABOUT ASTUTEPRO
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Your Trusted Financial Partners Since 2013
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              At <strong>AstutePro</strong>, we are a team of seasoned professionals with over a decade of expertise 
              in accounts, taxation, audit, and financial management. We provide end-to-end solutions tailored 
              to your unique business needs.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Our commitment to precision, integrity, and client success has made us the preferred choice for 
              businesses seeking reliable financial guidance and strategic insights.
            </p>

            

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content - Vision & Mission Cards */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div className="group p-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-emerald-100 leading-relaxed">
                To be the most trusted and innovative provider of accounting and tax services, recognized for 
                delivering excellence and fostering client growth.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group p-8 bg-white rounded-2xl shadow-xl border border-slate-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
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
      icon: <Calculator className="w-8 h-8" />,
      title: "Accounting & Bookkeeping",
      description: "Comprehensive financial record management and reporting",
      features: ["Daily Bookkeeping", "Financial Statements", "Bank Reconciliation"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Audit & Compliance",
      description: "Thorough audit services and regulatory compliance management",
      features: ["Internal Audits", "Compliance Verification", "Risk Assessment"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tax Services",
      description: "Complete tax planning, filing, and advisory services",
      features: ["Tax Planning", "Return Filing", "Tax Advisory"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Business Consultancy",
      description: "Strategic business consulting for growth and optimization",
      features: ["Strategic Planning", "Process Optimization", "Growth Strategy"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            OUR SERVICES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive Business Solutions
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 leading-relaxed">
            End-to-end professional services designed to optimize your financial operations, 
            ensure compliance, and drive sustainable business growth.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-400 text-xs">
                      <CheckCircle size={12} className="text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services List */}
        <div className="text-center mb-12">
          <p className="text-slate-300 text-lg mb-6">
            Plus many more services including:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400">
            {[
              "ERP Implementation", "Payroll Services", "VAT Services", 
              "Business Setup", "MIS & Budgeting", "IT Consulting"
            ].map((service, index) => (
              <span key={index} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            Explore All 12+ Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified professionals with decade-long experience in financial services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Confidential",
      description: "Your data and business information are completely secure with us"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure timely completion of all projects"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost Effective",
      description: "Premium quality services at competitive and transparent pricing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose AstutePro?
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            We stand out through our commitment to excellence, client-centric approach, 
            and unwavering dedication to your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 hover:border-emerald-500 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;