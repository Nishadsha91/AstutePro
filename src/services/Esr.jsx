import React from 'react';
import { Mail, CheckCircle, Shield, FileText, Briefcase, Users } from "lucide-react";

function Esr() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preventing Financial Crime",
      description: "Implementing strict AML frameworks to combat money laundering and terrorist financing, protecting your business reputation."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Real Economic Presence (ESR)",
      description: "Ensuring companies undertaking 'relevant activities' maintain a substantial economic presence in the UAE, aligned with global tax standards."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Global Alignment",
      description: "Meeting international requirements set by the OECD and the EU to ensure transparency and prevent harmful tax practices."
    }
  ];

  const benefits = [
    "Comprehensive ESR Activity Assessment",
    "AML Due Diligence Framework Design",
    "Preparation and Filing of ESR Notifications & Reports",
    "Suspicious Transaction Reporting Procedures",
    "Documentation Management for Audit Readiness",
    "Risk Mitigation and Reputational Protection"
  ];

  return (
    // Replicating the consistent visual theme
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Global Regulatory Compliance
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ESR & <span className="text-emerald-600">AML Compliance</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Economic Substance Regulations (ESR)
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                **ESR compliance** in the UAE is highly important as it ensures businesses operating in certain sectors meet international tax standards and maintain transparency. It prevents harmful tax practices and ensures companies undertaking **"relevant activities"** have a **real economic presence** in the UAE.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Anti-Money Laundering (AML) Compliance
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                **AML compliance** is crucial as it helps businesses prevent financial crimes, protect their reputation, and align with global regulatory standards. The UAE requires companies to conduct due diligence, maintain proper records, and report suspicious transactions, particularly in financial, real estate, and professional service sectors.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "We support businesses by assessing their obligations under both ESR and AML, designing robust compliance frameworks, and assisting with all necessary reporting and documentation filing."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Why Compliance Matters */}
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
              Our Compliance Process
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We begin by helping you accurately assess whether your specific activities trigger ESR or AML obligations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We then design and implement tailored compliance frameworks, prepare all required reports and notifications, and ensure your documentation is audit-ready.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Value of Our Expertise
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
            Achieve Seamless Global Compliance
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to ensure your business meets the rigorous standards of both ESR and AML regulations in the UAE.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Discuss Your Compliance Needs
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

export default Esr;