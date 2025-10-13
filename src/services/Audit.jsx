import React from "react";
import { Mail, Shield, CheckCircle, BarChart3, Eye } from "lucide-react";

function Audit() {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "External Assurance",
      description: "Independent auditing to ensure truthful financial statements and regulatory compliance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Internal Controls",
      description: "Continuous internal auditing to detect inefficiencies, prevent fraud, and strengthen processes"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Strategic Support",
      description: "Auditing insights that support management in risk mitigation and informed decision-making"
    }
  ];

  const benefits = [
    "Financial Accuracy & Transparency",
    "Legal & Regulatory Compliance",
    "Operational Efficiency",
    "Risk Management Support",
    "Fraud Detection & Prevention",
    "Sustainable Growth & Governance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Professional Audit Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Audit & <span className=" text-emerald-600">Internal Audit</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Auditing and internal auditing are essential for businesses, especially in environments like the UAE, because they ensure <span className="text-emerald-600 font-semibold">financial accuracy, legal compliance, risk management, and operational efficiency</span>.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Auditing (often external) provides independent assurance to stakeholders that financial statements are truthful, boosting credibility and helping companies meet regulatory and tax obligations.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Internal auditing operates continuously within the organization: it scrutinizes processes, detects fraud or inefficiencies, strengthens internal controls, and supports strategic decision-making.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "Combined, auditing and internal auditing foster transparency, accountability, and trust—the foundation stones for sustainable growth and good corporate governance."
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
              We provide all kinds of audit-related services, including internal audit, operational audit, and process reviews.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team ensures accurate reporting, efficient operations, and risk mitigation to support your strategic business decisions.
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
            Ready to Strengthen Your Auditing?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our audit services can help your business maintain transparency, accountability, and sustainable growth.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Get in Touch Today
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

export default Audit;