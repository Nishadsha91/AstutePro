import React from 'react';
import { Mail, BarChart2, DollarSign, Target, Settings, Cpu } from "lucide-react";

function Mis() {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Actionable MIS Reporting",
      description: "Integrating data from finance, operations, and HR into meaningful, real-time dashboards for strategic decision-making."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Budgeting & Control",
      description: "Designing realistic budgets, monitoring variances, and recommending cost controls to manage cash flow and avoid shortages."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Accurate Product Costing",
      description: "Determining the total cost (materials, labor, overheads) to set profitable pricing and identify cost-saving opportunities."
    }
  ];

  const benefits = [
    "Design of Effective MIS & Reporting Systems",
    "Validation of Product Cost Structures",
    "Identification of Cost-Saving Opportunities",
    "Enhanced Budgeting and Variance Analysis",
    "Optimized Resource Allocation and Efficiency",
    "Support for Strategic Planning and Pricing"
  ];

  return (
    // Replicating the consistent visual theme
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Insight-Driven Business Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            MIS, Budgeting & <span className="text-emerald-600">Product Costing</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                A **Management Information System (MIS)** is vital as it provides accurate, timely, and relevant data to support **decision-making** at all levels. By integrating data from various functions, MIS helps management monitor performance, identify trends, and respond quickly to market changes.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                **Budgeting** helps organizations set realistic goals, allocate funds wisely, and manage cash flow. Comparing actual performance with budgeted figures allows management to identify variances and take **corrective action** to control costs.
              </p>

              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                **Product costing** determines the total production cost (materials, labor, overheads). Accurate costing is crucial for setting **competitive yet profitable pricing**, evaluating product profitability, and making informed decisions on resource allocation.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "We provide independent expertise to strengthen your budgeting, MIS, and product costing processes, ensuring accuracy and efficiency. This enables your business to optimize resources and achieve sustainable growth."
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
              Our Advisory Approach
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We guide businesses in setting up effective MIS systems that deliver timely and relevant information tailored for strategic decision-making.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We validate your cost structures, help design realistic budgets, monitor variances, and suggest improvements to enhance profitability and overall financial management.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Value of Strategic Insights
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Cpu className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" /> 
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Data into Strategic Power
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to gain accurate insights, optimize costs, and align your financial processes for sustainable success.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Request a Consultation
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

export default Mis;