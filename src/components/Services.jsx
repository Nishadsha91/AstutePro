import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

function Services() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Service details: title, description, benefits, image, and gradient
  const services = [
    {
      title: "ACCOUNTING & BOOK KEEPING",
      desc: "Manage your financial records efficiently with accurate bookkeeping and accounting solutions tailored for your business.",
      benefits: ["Financial Statement Preparation", "Record Maintenance", "Bank Reconciliation"],
      img: "/pexels-fauxels-3184292.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "AUDIT & INTERNAL AUDIT",
      desc: "Ensure compliance and operational efficiency with our thorough audit and internal audit services.",
      benefits: ["Compliance Check", "Risk Assessment", "Internal Controls Review"],
      img: "/AUDIT & INTERNAL AUDIT.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "MIS, BUDGETING, & PRODUCT COSTING",
      desc: "Gain insights and control over your business with MIS reports, budgeting, and accurate product costing.",
      benefits: ["MIS Reporting", "Budget Analysis", "Cost Optimization"],
      img: "/cost.png",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "BUSINESS SETUP SERVICES",
      desc: "Simplify your business registration and setup process with expert guidance and complete documentation support.",
      benefits: ["Company Registration", "Legal Compliance", "Business Structuring"],
      img: "/busines.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "VALUE ADDED TAX SERVICES",
      desc: "Optimize VAT compliance and filings with our specialized VAT advisory services.",
      benefits: ["VAT Registration", "Filing & Compliance", "VAT Advisory"],
      img: "/VAT.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "PAYROLL SERVICES",
      desc: "Streamline payroll processing with accuracy and compliance for your employees.",
      benefits: ["Salary Processing", "Statutory Compliance", "Employee Reports"],
      img: "/payroll.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "ERP & ACCOUNTING SOFTWARES",
      desc: "Implement ERP and accounting software to automate business operations and financial management.",
      benefits: ["ERP Implementation", "Custom Software", "Training & Support"],
      img: "/159347-OV1JJK-885.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "CORPORATE TAX SERVICES",
      desc: "Navigate corporate taxes efficiently with compliance, planning, and advisory services.",
      benefits: ["Tax Planning", "Filing & Compliance", "Audit Support"],
      img: "/corporate.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "INVENTORY & FIXED ASSET VERIFICATION",
      desc: "Ensure accurate inventory and asset verification to maintain reliable records and optimize resources.",
      benefits: ["Asset Verification", "Inventory Audit", "Reporting"],
      img: "/web-7174079.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "Build modern web and mobile applications that drive engagement and business growth.",
      benefits: ["Responsive Web Design", "Web Development", "UI/UX Design"],
      img: "/web.jpg",
      gradient: "from-black/80 to-black-900/30",
    },
    {
      title: "ESR & AML COMPLIANCE",
      desc: "Stay compliant with economic substance regulations and anti-money laundering standards.",
      benefits: ["ESR Advisory", "AML Compliance", "Regulatory Reporting"],
      img: "/esr.webp",
      gradient: "from-black/80 to-black-900/30",
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(/path/to/your/image8.jpg)", backgroundSize: '150px 150px' }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-blob-1"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-blob-2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 lg:mb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our <span className="text-green-600">Featured Services</span></h3>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Highlighting key solutions that drive significant value for our clients, combining expertise with impactful results.
            </p>
            <div className="flex justify-center mt-6">
              <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} flex items-end p-6`}>
                    <span className="text-white text-3xl font-bold">{service.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 mb-4 text-base">{service.desc}</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
