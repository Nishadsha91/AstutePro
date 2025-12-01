import React from "react";
import { motion } from "framer-motion";
import {
  Target, Globe, Lightbulb, Users, Shield, TrendingUp, Zap, CheckCircle, ArrowRight, BarChart3,
  Scale, Handshake, Gem, Rocket, Clock, Award
} from "lucide-react";

function About() {
  const values = [
    { icon: <Shield className="w-8 h-8" />, title: "Integrity & Transparency", description: "Upholding the highest ethical standards, ensuring complete honesty and trust in every engagement. Your confidence is our priority." },
    { icon: <Scale className="w-8 h-8" />, title: "Precision & Accuracy", description: "Every financial detail matters. We ensure absolute accuracy in all services, from bookkeeping to complex tax planning."  },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Client Growth Focus", description: "Your success is our success. We're committed to creating sustainable growth and long-term value for your business." },
    { icon: <Rocket className="w-8 h-8" />, title: "Innovation & Technology", description: "Leveraging cutting-edge technology and innovative approaches to deliver efficient, modern financial solutions." },
    { icon: <Handshake className="w-8 h-8" />, title: "Collaborative Partnership", description: "We work as an extension of your team, fostering open communication and collaborative decision-making."},
    { icon: <Lightbulb className="w-8 h-8" />, title: "Strategic Insight", description: "Going beyond numbers to provide strategic insights that drive informed business decisions and competitive advantage." },
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Analysis", description: "We thoroughly understand your business, challenges, and financial goals to lay a solid foundation." },
    { step: "02", title: "Strategic Planning", description: "Customized financial strategies are developed, perfectly tailored to your unique business needs." },
    { step: "03", title: "Seamless Implementation", description: "Executing the plan with utmost precision, maintaining continuous communication and adaptability." },
    { step: "04", title: "Monitoring & Optimization", description: "Regular reviews and proactive adjustments ensure sustained success and continuous growth." },
  ];

  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative bg-gradient-to-br from-white via-slate-50 to-emerald-50 overflow-hidden py-24 lg:py-32">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl animate-blob-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-blob-2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl animate-blob-3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- WHO WE ARE Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">WHO WE ARE</span>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Your Trusted Financial <span className="text-emerald-600">Partner</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mt-4"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-slate-700 leading-relaxed">
<div className="space-y-4 text-justify leading-relaxed">
  <p>
    At Astutepro, we are a team of experienced professionals with over a decade 
    of expertise in accounts, taxation, audit, MIS, and finance-related services. 
    We provide end-to-end accounting, financial management, and tax solutions 
    tailored to the unique needs of every client.
  </p>

  <p>
    From accurate bookkeeping and financial reporting to advanced tax planning, 
    compliance management, and strategic advisory, we ensure that every detail 
    is handled with precision and care. We uphold the highest standards of 
    integrity, accuracy, and confidentiality in every engagement.
  </p>

  <p>
    Whether it’s managing complex tax matters, streamlining accounting processes, 
    or offering actionable financial insights for decision-making, we remain 
    committed to excellence at every step.
  </p>
</div>

            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="/investment-5241253_1280.jpg"
              alt="Growing plant symbolizing business growth"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-3xl"></div>
          </motion.div>
        </div>

        {/* --- Vision & Mission Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Vision Card */}
          <motion.div
            className="group p-8 lg:p-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl shadow-2xl text-white hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-emerald-100 leading-relaxed text-base lg:text-lg">
              To be the most trusted and innovative provider of accounting and tax services, recognized for delivering excellence, fostering client growth, and setting new standards of professionalism in the accounts and tax industry. We aim to empower businesses with clarity, confidence, and strategic insights.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="group p-8 lg:p-10 bg-white rounded-3xl shadow-2xl border border-slate-200 hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                <Globe className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-base lg:text-lg">
              Our mission is to provide accounting, tax, and finance services with precision, transparency, integrity, and create value to the clients and businesses. we aim to build long-term partnerships that foster trust, support informed decision-making, and promote sustainable growth.
            </p>
          </motion.div>
        </div>

        {/* --- Values Section --- */}
        <div className="mb-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our Core <span className="text-green-600">Values</span></h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              We uphold the highest ethical standards, ensuring honesty, transparency, and trust in every engagement.
            </p>
            <div className="flex justify-center mt-6">
              <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden"
                variants={cardVariants}
              >
                {/* Background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-md group-hover:shadow-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6 text-sm">{value.description}</p>

  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- Process Steps Section --- */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our Streamlined <span className="text-emerald-600">4-Step Process</span></h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              A systematic and client-centric approach designed to deliver exceptional results and accelerate your financial objectives.
            </p>
            <div className="flex justify-center mt-6">
              <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-auto"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <img
                src="pexels-goumbik-669610.jpg"
                alt="Hand reviewing financial document with pen"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-green-600/10 rounded-3xl"></div>
            </motion.div>

            {/* Process Steps List */}
            <div className="flex flex-col space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start space-x-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={itemVariants}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-extrabold shadow-md transition-all duration-300 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-base">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;