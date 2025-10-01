import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  Facebook, Twitter, Linkedin, Instagram, ArrowRight, Calendar, User, Building, MessageSquare, Briefcase
} from "lucide-react";

// Main Component
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-800 font-sans antialiased">
      <ContactHero />
      <ContactInfo />
      <ContactForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        submitted={submitted} 
      />
      <MapSection />
    </div>
  );
}

// Hero Section
function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white to-emerald-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-200/50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/40 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}></div>
      </div>

      <div className="relative  z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          GET IN TOUCH
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
          Let's Start Something <span className="text-emerald-600">Great</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ready to take your business to the next level? Our team of experts is here to help you achieve your goals.
        </p>
      </div>
    </section>
  );
}

// Contact Info Section - Top Section
function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "connect@astutepro.in",
      link: "mailto:connect@astutepro.in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm",
      details: "+91 701 234 5678",
      link: "tel:+917012345678",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Astutepro Street, New Delhi",
      link: "#map",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're available during",
      details: "Mon-Fri: 9:00 AM - 5:00 PM",
      link: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-slate-600">
            Choose the most convenient way to reach out to our team
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{method.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{method.description}</p>
              <p className="text-slate-800 font-medium text-sm group-hover:text-emerald-600 transition-colors">
                {method.details}
              </p>
            </a>
          ))}
        </div>

        {/* Social Media & Quick Stats */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Follow Our Journey</h3>
            <p className="text-slate-600 mb-6">Stay updated with our latest insights and updates</p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-500", label: "Facebook" },
                { icon: Twitter, color: "hover:bg-sky-500", label: "Twitter" },
                { icon: Linkedin, color: "hover:bg-blue-600", label: "LinkedIn" },
                { icon: Instagram, color: "hover:bg-pink-500", label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 ${social.color} hover:text-white transition-all duration-300 shadow-sm`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
              { number: "50+", label: "Projects Done" },
              { number: "15+", label: "Team Experts" }
            ].map((stat, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Form Section - Below Contact Info
function ContactForm({ formData, handleChange, handleSubmit, submitted }) {
  return (
    <section className="relative py-16 bg-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200">
          {/* Form Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4" />
              SEND US A MESSAGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Submission Success Message */}
          {submitted && (
            <div className="p-4 mb-8 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl animate-fade-in">
              <CheckCircle className="w-6 h-6 flex-shrink-0" /> 
              <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required
                    className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@company.com" 
                    required
                    className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
                  />
                </div>
              </div>
            </div>

            {/* Contact & Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+91 123 456 7890" 
                    required
                    className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your Company"
                    className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
                  />
                </div>
              </div>
            </div>

            {/* Service & Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Service Interested In
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  placeholder="e.g., Tax Audit, ERP Setup, Business Consulting"
                  className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your project requirements, challenges, or any specific needs you have..." 
                  rows="5"
                  required
                  className="w-full p-3 pt-4 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={submitted}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg
                ${submitted 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 hover:shadow-xl transform hover:scale-105'}`
              }
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending Message...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Map Section
function MapSection() {
  return (
    <section className="relative py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4" />
                VISIT OUR OFFICE
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Find Our Location</h2>
              <p className="text-slate-600 mb-6">
                Feel free to visit our office for a face-to-face consultation. We're located in the heart of New Delhi with easy access to public transportation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>123 Astutepro Street, Business District, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+91 701 234 5678</span>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sIndia+Gate%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1696123456789!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;