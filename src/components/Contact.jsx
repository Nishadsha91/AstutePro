import React, { useState } from "react";
import { 
  Mail, Phone, Clock, Send, CheckCircle, User, Building, MessageSquare, Briefcase,
  Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";

// Main Contact Component
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

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-800 font-sans antialiased">
      <Hero />
      <ContactInfo />
      <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} submitted={submitted} />
    </div>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br to-white from-emerald-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
          GET IN TOUCH
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
          Let's Start Something <span className="text-emerald-600">Great</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Ready to take your business to the next level? Our team of experts is here to help you achieve your goals.
        </p>
      </div>
    </section>
  );
}

// Contact Info Section
function ContactInfo() {
  const contacts = [
    { icon: Mail, title: "Email Us", details: "connect@astutepro.in", link: "mailto:connect@astutepro.in", color: "from-blue-500 to-cyan-500" },
    { icon: Phone, title: "Call Us", details: "+971 56 430 5634", link: "tel:+971564305634", color: "from-emerald-500 to-green-500" },
    { icon: Clock, title: "Business Hours", details: "Mon-Fri: 9:00 AM - 5:00 PM", link: "#", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Multiple Ways to Connect</h2>
          <p className="text-lg text-slate-600">Choose the most convenient way to reach out to our team</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <a key={i} href={c.link} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className={`w-12 h-12 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
              <p className="text-slate-800 font-medium text-sm group-hover:text-emerald-600 transition-colors">{c.details}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section with Right-Side Panel
function ContactForm({ formData, handleChange, handleSubmit, submitted }) {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                <MessageSquare className="w-4 h-4" /> SEND US A MESSAGE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            {submitted && (
              <div className="p-4 mb-8 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl">
                <CheckCircle className="w-6 h-6 flex-shrink-0" /> 
                <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" icon={User} label="Full Name *" />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" icon={Mail} label="Email Address *" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 123 456 7890" icon={Phone} label="Phone Number *" />
                <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" icon={Building} label="Company Name" />
              </div>
              <Input name="service" value={formData.service} onChange={handleChange} placeholder="Service Interested In" icon={Briefcase} label="Service Interested In" />
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." icon={MessageSquare} label="Your Message *" />

              <button type="submit" disabled={submitted} className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${submitted ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 hover:shadow-xl transform hover:scale-105'}`}>
                {submitted ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side Panel */}
          <div className="relative bg-gradient-to-tr from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our Office</h3>
              <p className="text-slate-700 mb-4">
                123 Business Street, Suite 456<br/>
                Dubai, UAE
              </p>
              <p className="text-slate-700 mb-6">Mon-Fri: 9:00 AM - 5:00 PM</p>

              <h3 className="text-2xl font-bold text-emerald-800 mb-3">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-blue-700 hover:text-blue-800 transition"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition"><Instagram className="w-6 h-6" /></a>
              </div>
            </div>

            {/* Decorative Illustration */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Input Component
const Input = ({ name, value, onChange, placeholder, icon: Icon, label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={label.includes("*")}
        className="w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200" 
      />
    </div>
  </div>
);

// Textarea Component
const Textarea = ({ name, value, onChange, placeholder, icon: Icon, label }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
      <textarea 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        rows="5"
        required
        className="w-full p-3 pt-4 pl-10 rounded-xl bg-slate-50 text-slate-800 border border-slate-300 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 resize-none"
      ></textarea>
    </div>
  </div>
);

export default Contact;
