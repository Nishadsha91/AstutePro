import React from "react";
import { Mail, TrendingUp, Shield, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Accounting() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Decision-Making Tool",
      description: "Real-time insights for smarter business decisions and growth planning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Safeguard",
      description: "Ensuring adherence to tax laws, regulations, and international standards"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Financial Clarity",
      description: "Accurate reports that reveal your company's true financial position"
    }
  ];

  const benefits = [
    "Accurate & Compliant Records",
    "Tax & Corporate Law Expertise",
    "International Standards Alignment",
    "Stakeholder-Ready Reporting",
    "Risk Management Support",
    "Strategic Growth Planning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-25">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Professional Accounting Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Accounting <span className="text-emerald-600">Services</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                In today's fast-changing business and technological world, accounting goes beyond recording numbers. 
                It provides <span className="text-emerald-600 font-semibold">real-time insights</span> that help organizations make smarter decisions, manage risks, and plan for growth.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                At the same time, accounting ensures <span className="text-emerald-600 font-semibold">compliance</span> with tax laws, regulations, and international standards, 
                protecting businesses from penalties and building trust with investors and stakeholders.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "Accounting is both a decision-making tool and a compliance safeguard that keeps businesses competitive, credible, and sustainable."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 p-8 md:p-12 pt-0">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our expert accounting team ensures that your accounting records are kept accurate, compliant, and structured.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We generate comprehensive reports to help stakeholders understand your company's financial position and make timely decisions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our accounting services can help your business stay compliant, competitive, and financially healthy.
          </p>
          <Link to={"/contact"} className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Get in Touch Today
          </Link>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

export default Accounting;