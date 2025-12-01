import React, { useState } from "react";
import { 
  Mail, Phone, Clock, Send, CheckCircle, User, Building, MessageSquare, Briefcase,
  Facebook, Twitter, Linkedin, Instagram, ChevronDown, MapPin
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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: ""});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setErrors({});
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-800 font-sans antialiased">
      <Hero />
      <ContactInfo />
      <ContactForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        submitted={submitted}
        errors={errors}
      />
      
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
function ContactForm({ formData, handleChange, handleSubmit, submitted, errors }) {
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
              <div className="p-4 mb-8 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl animate-pulse">
                <CheckCircle className="w-6 h-6 flex-shrink-0" /> 
                <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" icon={User} label="Full Name *" error={errors.name} />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" icon={Mail} label="Email Address *" type="email" error={errors.email} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 123 456 7890" icon={Phone} label="Phone Number *" error={errors.phone} />
                <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" icon={Building} label="Company Name" />
              </div>
              <Input name="service" value={formData.service} onChange={handleChange} placeholder="Service Interested In" icon={Briefcase} label="Service Interested In" />
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project and how we can help..." icon={MessageSquare} label="Your Message *" error={errors.message} />

              <button onClick={handleSubmit} disabled={submitted} className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${submitted ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 hover:shadow-xl transform hover:scale-105'}`}>
                {submitted ? 'Sending...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side Panel */}
          <InfoPanel />
        </div>
      </div>
    </section>
  );
}

// Info Panel Component
function InfoPanel() {
const whyChooseUs = [
  { title: "Integrity & Transparency", desc: "Honest, ethical, and fully transparent financial services." },
  { title: "Precision & Accuracy", desc: "Accurate bookkeeping, reporting, and compliance every time." },
  { title: "Client Growth Focus", desc: "Strategies designed to help your business grow sustainably." },
  { title: "Collaborative Approach", desc: "We work closely with you as a trusted long-term partner." },
];


  return (
    <div className="space-y-6">
      {/* Why Choose Us */}
      <div className="bg-gradient-to-br to-emerald-600 from-green-500 rounded-3xl p-8 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
        <div className="space-y-4">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-emerald-50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Location */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Our Office</h3>
        <p className="text-slate-600 mb-4">
          123 Business District<br />
          Dubai, United Arab Emirates
        </p>
        <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden">
          <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57676.277945544186!2d55.45917201335116!3d25.322626319966537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5df14e533d%3A0x73cc61cd6d65a7e3!2sSharjah%20Research%20Technology%20and%20Innovation%20Park%20(SPARK)!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>

      {/* Social Media */}

    </div>
  );
}

// Input Component
const Input = ({ name, value, onChange, placeholder, icon: Icon, label, type = "text", error }) => (
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
        className={`w-full p-3 pl-10 rounded-xl bg-slate-50 text-slate-800 border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-200'} placeholder-slate-400 focus:ring-2 outline-none transition-all duration-200`} 
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Textarea Component
const Textarea = ({ name, value, onChange, placeholder, icon: Icon, label, error }) => (
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
        className={`w-full p-3 pt-4 pl-10 rounded-xl bg-slate-50 text-slate-800 border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-emerald-500 focus:ring-emerald-200'} placeholder-slate-400 focus:ring-2 outline-none transition-all duration-200 resize-none`}
      ></textarea>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// // FAQ Section
// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);
  
//   const faqs = [
//     {
//       q: "What is your typical response time?",
//       a: "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
//     },
//     {
//       q: "Do you offer free consultations?",
//       a: "Yes! We offer a complimentary 30-minute consultation to discuss your project needs and how we can help achieve your goals."
//     },
//     {
//       q: "What services do you provide?",
//       a: "We offer a comprehensive range of services including web development, mobile app development, digital marketing, UI/UX design, and business consulting."
//     },
//     {
//       q: "What are your payment terms?",
//       a: "We typically require 50% upfront and 50% upon project completion. For larger projects, we can arrange milestone-based payment schedules."
//     },
//     {
//       q: "Do you work with international clients?",
//       a: "Absolutely! We work with clients from around the world and have experience managing projects across different time zones."
//     }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
//             FAQ
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
//           <p className="text-lg text-slate-600">Quick answers to questions you may have</p>
//         </div>
        
//         <div className="space-y-4">
//           {faqs.map((faq, i) => (
//             <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
//               <button
//                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                 className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
//               >
//                 <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
//                 <ChevronDown className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
//               </button>
//               <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
//                 <div className="p-6 pt-0 text-slate-600">
//                   {faq.a}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



export default Contact;