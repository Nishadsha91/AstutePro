import React from 'react';
import { Mail, Briefcase, Globe, Landmark, DollarSign, Target } from "lucide-react";

export default function Busines() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Strategic Location",
      description: "Positioned as a global hub between Asia, Europe, and Africa with excellent logistics access."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Favorable Tax Regime",
      description: "Competitive corporate tax policies and numerous free zones with full foreign ownership."
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Investor-Friendly Policies",
      description: "Political stability, modern infrastructure, and supportive government initiatives for growth."
    }
  ];

  const benefits = [
    "Expert Guidance on Structure & Jurisdiction",
    "Simplifying Complex Licensing Processes",
    "Ensuring Full Legal & Regulatory Compliance",
    "Start-to-Operation Establishment Services",
    "Choosing the Right Location (Free Zone/Mainland)",
    "Efficient Capital Repatriation Planning"
  ];

  return (
    // Replicating the Audit page's gradient background and max-width container
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Global Expansion Simplified
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            UAE <span className="text-emerald-600">Business Setup</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                The **UAE** has become one of the world’s most attractive destinations for starting a business due to its **strategic location, investor-friendly policies,** and modern infrastructure.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Positioned as a global hub between Asia, Europe, and Africa, it offers easy access to international markets and a strong logistics network through world-class airports and ports.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                The country provides a favorable tax regime, along with numerous free zones offering full foreign ownership and repatriation of profits, creating a secure and **growth-oriented environment.**
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "While the UAE is a hub of opportunity, **proper research and due diligence are essential.** We simplify the complex process of choosing the right licenses, jurisdiction, and location to ensure a seamless establishment."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Why The UAE */}
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
              Our Expert Guidance
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We assist our clients in providing expert guidance on choosing the right legal **structure** and **jurisdiction** (Free Zone/Mainland), ensuring compliance with all regulatory requirements.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We manage the entire process, from due diligence and licensing to providing all services necessary to start operations and establish your business firmly.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              How We Streamline Your Setup
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" /> 
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Launch Your Business in the UAE?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a seamless, compliant, and strategic business setup experience.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Start Your Setup Journey
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}
