import React from 'react';
import { Mail, ClipboardCheck, Warehouse, TrendingUp, Search, Shield } from "lucide-react";

export default function Inventory() {
  const features = [
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Stock Record Accuracy",
      description: "Independent checks to ensure physical inventory matches book records, safeguarding assets from errors and losses."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Fixed Asset Confirmation",
      description: "Verifying the existence, ownership, and condition of assets (machinery, buildings, equipment) to ensure correct valuation."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Enhanced Decision-Making",
      description: "Providing reliable, verified stock data for better purchasing, production, sales planning, and long-term efficiency."
    }
  ];

  const benefits = [
    "Detection of Discrepancies and Losses",
    "Prevention of Fraud and Misuse of Assets",
    "Compliance with Accounting Standards",
    "Strengthening of Internal Controls",
    "Building Trust in Financial Reports",
    "Accurate Asset Valuation and Reporting"
  ];

  return (
    // Replicating the consistent visual theme
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Asset Integrity Assurance
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Inventory & Fixed <span className="text-emerald-600">Assets Verification</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Necessity of Inventory Verification
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Inventory verification is vital for ensuring that the physical stock matches the records in the books, safeguarding assets from errors, theft, or losses. It provides accurate financial reporting, supports compliance, and strengthens internal controls.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Role of Fixed Assets Verification
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                Fixed assets verification is essential to confirm the existence, ownership, and condition of an organization’s long-term assets, such as buildings, machinery, and equipment. It ensures assets are correctly valued and not misused or lost.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "We provide independent checks to ensure your asset records are accurate and reliable. Our verification process detects discrepancies, prevents fraud, confirms compliance, and ultimately gives management confidence for better strategic decision-making."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - How Verification Helps */}
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
              Our Verification Process
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our service involves providing independent, physical checks of both your inventory and fixed assets against your accounting records.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We identify and report any discrepancies, assess the condition and valuation of assets, and ensure full compliance with relevant accounting standards.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Confidence in Your Assets
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
        <div className ="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ensure the Integrity of Your Balance Sheet
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for an independent and reliable verification of your inventory and fixed assets.
          </p>
          <Link to={"/contact"} className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Schedule a Verification Service
          </Link>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

