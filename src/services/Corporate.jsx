import React from 'react';
import { Mail, Landmark, FileText, CheckCircle, Calculator, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Corporate() {
  const features = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Strategic Alignment",
      description: "Navigating the UAE's new federal CIT structure, designed to align with international standards."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mandatory Compliance",
      description: "Ensuring adherence to Federal Tax Authority requirements to avoid penalties and reputational damage."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accurate Computation",
      description: "Assisting in computing taxable income and applying the correct tax rates for various entities."
    }
  ];

  const benefits = [
    "Seamless Corporate Tax Registration",
    "Accurate Taxable Income Calculation",
    "Preparation and Submission of CIT Returns",
    "Developing Tax-Efficient Strategies (including Free Zones)",
    "Penalty Avoidance and Risk Mitigation",
    "Transparent Financial Reporting for Audits"
  ];

  return (
    // Replicating the consistent visual theme
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Tax Compliance & Efficiency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            UAE Corporate <span className="text-emerald-600">Tax Services</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                The UAE introduced its first federal Corporate Income Tax (CIT), marking a significant shift in its tax policy. The CIT structure is designed to align with international standards while maintaining competitiveness.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Compliance with corporate tax laws in the UAE is critical for every business to operate legally and sustainably. Adhering to the Federal Tax Authority’s requirements helps companies avoid severe penalties, interest charges, and reputational damage.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Beyond compliance, effective tax management ensures transparent reporting, accurate financial planning, and smoother audits, establishing a credible foundation for your business.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "We assist our clients not only in meeting their compliance obligations but also in developing tax-efficient strategies—for all entities, including Free Zone companies—while strictly adhering to UAE tax laws."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Why Our Service */}
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
              Our Core Services
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We provide end-to-end support, covering corporate tax registration, compliance, and strategic advisory services tailored to your business needs in the UAE.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team ensures accurate computation of taxable income and timely filing of returns, allowing you to focus on core business operations.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              How We Ensure Your Compliance
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" /> 
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Secure Your Tax Compliance Today
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the new UAE Corporate Tax landscape efficiently and compliantly.
          </p>
          <Link to={"/contact"} className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Book a Corporate Tax Consultation
          </Link>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

