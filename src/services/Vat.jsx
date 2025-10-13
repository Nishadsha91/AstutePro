import React from 'react';
import { Mail, Shield, FileText, CheckCircle, Calculator, BookOpen } from "lucide-react";

function Vat() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Penalty & Risk Avoidance",
      description: "Ensuring full compliance with FTA requirements to avoid heavy fines, penalties, and legal consequences."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Accurate Tax Returns",
      description: "Preparing and filing tax returns on time and accurately, supported by proper documentation and reliable records."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tax Optimization",
      description: "Advising on input VAT recovery, exemptions, and zero-rated supplies to legally maximize tax efficiency."
    }
  ];

  const benefits = [
    "Seamless VAT Registration and Deregistration",
    "Setup of VAT-Compliant Invoicing Systems",
    "Timely and Accurate Filing of VAT Returns",
    "Expert Advice on Input VAT Recovery",
    "Staff Training on VAT Best Practices",
    "Continuous Updates on Regulatory Changes"
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
            UAE <span className="text-emerald-600">VAT Compliance Services</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Complying with **VAT laws** in the UAE is essential for every registered business. Proper VAT compliance ensures that companies avoid heavy fines, penalties, and legal consequences imposed by the Federal Tax Authority (FTA).
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Beyond avoiding risks, compliance builds **credibility and trust** with customers, investors, and regulators. It also provides accurate financial records, making business decisions more reliable and transparent.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                By meeting VAT obligations on time, businesses not only safeguard their reputation but also strengthen their **long-term sustainability** and growth in the UAE’s regulated business environment.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "Our taxation team works with companies to meet their compliance obligations smoothly and efficiently. We cover everything from registration and system setup to filing returns and advising on tax optimization strategies."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Our Key Focus Areas */}
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
              Our Comprehensive Support
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We guide businesses through the entire VAT lifecycle, from initial registration to setting up compliance-ready accounting systems that accurately capture VAT.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We also maintain proper documentation, advise on maximizing input VAT recovery, and provide training to your staff on best practices and regulatory changes.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Why Partner With Our Tax Team
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
            Secure Your VAT Compliance Today
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let our taxation experts ensure your business meets every VAT obligation efficiently and accurately.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Get VAT Compliance Support
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

export default Vat;