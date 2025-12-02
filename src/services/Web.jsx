import React from 'react';
import { Mail, Globe, Smartphone, Code, TrendingUp, Users } from "lucide-react";

export default function Web() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Credibility & Visibility",
      description: "Establishing the digital face of your company to build credibility, enhance brand visibility, and act as a central hub for marketing."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Enhanced Customer Engagement",
      description: "Utilizing mobile apps to offer personalized experiences, improving accessibility, and driving interaction anytime, anywhere."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Applying the right technologies, frameworks, and programming languages to ensure efficient performance, responsive design, and scalability."
    }
  ];

  const benefits = [
    "Custom Website Design and Development",
    "Tailored Mobile Application Development",
    "Focus on Responsive and User-Centric Design",
    "Ensuring High Performance and Scalability",
    "Cost-Effective Marketing and Promotion",
    "Ongoing Maintenance and Technical Support"
  ];

  return (
    // Replicating the consistent visual theme
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Digital Presence & Technology
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Website & <span className="text-emerald-600">Mobile App Development</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Power of a Digital Face
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                A **website** is the digital face of a company, crucial for **building credibility, enhancing visibility, and driving growth**. It provides vital information, acts as a central hub for marketing, and enables cost-effective promotion compared to traditional methods.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Mobile Engagement Advantage
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                A **mobile app** is a powerful tool to strengthen customer engagement, improve accessibility, and drive business growth. It allows users to interact with products and services anytime, anywhere, offering convenience and a personalized experience.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 text-lg font-medium italic">
                  "We support in designing, coding, and maintaining websites and applications to meet both technical requirements and high user expectations. We ensure the right technologies are applied for efficient performance, responsive design, and future scalability."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - What We Guarantee */}
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
              Our Development Approach
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our team focuses on applying cutting-edge frameworks and languages to deliver applications that are not just beautiful, but also highly efficient and scalable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We cover the full spectrum: from designing user interfaces that convert leads to maintaining and updating the technical backend to ensure long-term stability.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-xl p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Outcomes You Can Expect
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <TrendingUp className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" /> 
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's design and deploy a website or mobile app that engages customers and drives your business growth.
          </p>
          <button className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Mail className="mr-3" size={22} /> 
            Start Your Project Consultation
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400"></div>
    </div>
  );
}

