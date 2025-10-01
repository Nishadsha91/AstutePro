import React from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  Briefcase, 
  Target, 
  Settings, 
  FilePlus, 
  Users, 
  Package, 
  Code, 
  Scale,
  ArrowRight
} from "lucide-react";

function Services() {
  const servicesData = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Accounting & Book Keeping",
      description: "Accurate financial record management and reporting",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Audit & Internal Audit",
      description: "Independent assurance and control optimization",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "MIS, Budgeting & Costing",
      description: "Management systems and financial planning",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Setup",
      description: "Company registration and legal establishment",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <FilePlus className="w-6 h-6" />,
      title: "VAT Services",
      description: "VAT compliance and advisory services",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Payroll Services",
      description: "Complete payroll management solutions",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "ERP & Software",
      description: "Accounting software implementation",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Consultancy",
      description: "Strategic business advisory services",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FilePlus className="w-6 h-6" />,
      title: "Corporate Tax",
      description: "Corporate tax planning and compliance",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Verification",
      description: "Asset and stock verification services",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "IT Consulting",
      description: "Web, app and digital solutions",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Compliance",
      description: "ESR, AML and IFRS compliance",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="services" className="relative py-35 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Professional services to support your business growth and compliance needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* CTA */}
              <button className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                Learn more 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;