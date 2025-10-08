import React from "react";
import { 
  Target, Globe, Lightbulb, Award, Clock, Heart, Users, Shield, 
  TrendingUp, BookOpen, Zap, Building, Star, CheckCircle, 
  ArrowRight, Calendar, MapPin, Phone, Mail, ThumbsUp 
} from "lucide-react";

function About() {
  const stats = [
    { number: "10+", label: "Years of Excellence", icon: <Award className="w-6 h-6" />, description: "Decade of trusted financial services" },
    { number: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" />, description: "Businesses we've helped grow" },
    { number: "99%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" />, description: "Consistently exceeding expectations" },
    { number: "24/7", label: "Dedicated Support", icon: <Clock className="w-6 h-6" />, description: "Always here for our clients" },
    { number: "50+", label: "Expert Team Members", icon: <BookOpen className="w-6 h-6" />, description: "Certified professionals" },
    { number: "15+", label: "Industry Awards", icon: <Star className="w-6 h-6" />, description: "Recognized excellence" },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity & Transparency",
      description: "We uphold the highest ethical standards, ensuring complete honesty and trust in every engagement. Your confidence is our priority.",
      features: ["Ethical Practices", "Full Disclosure", "Trust Building"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision & Accuracy",
      description: "Every financial detail matters. We ensure absolute accuracy in all services, from bookkeeping to complex tax planning.",
      features: ["Meticulous Attention", "Error-Free Work", "Quality Assurance"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Client Growth Focus",
      description: "Your success is our success. We're committed to creating sustainable growth and long-term value for your business.",
      features: ["Growth Strategy", "Value Creation", "Long-term Partnership"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge technology and innovative approaches to deliver efficient, modern financial solutions.",
      features: ["Tech-Driven Solutions", "Process Innovation", "Digital Transformation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering open communication and collaborative decision-making.",
      features: ["Team Integration", "Open Communication", "Shared Goals"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategic Insight",
      description: "Going beyond numbers to provide strategic insights that drive informed business decisions and competitive advantage.",
      features: ["Business Intelligence", "Strategic Advisory", "Market Insights"]
    }
  ];

  const teamHighlights = [
    {
      title: "Certified Professionals",
      description: "Our team includes CA, CPA, and CMA certified experts with specialized industry knowledge."
    },
    {
      title: "Continuous Training",
      description: "Regular training programs to stay updated with latest regulations and technologies."
    },
    {
      title: "Industry Specialization",
      description: "Deep expertise across multiple industries including manufacturing, retail, and services."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We begin by thoroughly understanding your business, challenges, and financial goals."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Developing customized financial strategies tailored to your specific business needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Executing the plan with precision while maintaining continuous communication."
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Regular reviews and adjustments to ensure ongoing success and growth."
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/20  rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(16 185 129 / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(16 185 129 / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Our Journey of Excellence
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Founded in <strong>2013</strong>, AstutePro emerged from a simple vision: to provide businesses 
                with financial services that combine technical expertise with strategic insight. What started 
                as a small team of passionate accountants has grown into a comprehensive financial solutions 
                provider serving over 500 clients nationwide.
              </p>
              
              <p>
                Our journey has been marked by continuous learning, adaptation to changing regulations, 
                and embracing technological advancements. We've evolved from traditional accounting practices 
                to becoming technology-enabled financial partners, helping businesses navigate digital 
                transformation while maintaining financial integrity.
              </p>

              <p>
                Today, we stand as a testament to our core belief: <strong>great financial management 
                shouldn't be complex or intimidating</strong>. It should be a strategic advantage that 
                propels businesses forward.
              </p>
            </div>

            {/* Key Milestones */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { year: "2013", event: "Company Founded" },
                { year: "2016", event: "100+ Clients" },
                { year: "2020", event: "Digital Transformation" }
              ].map((milestone, index) => (
                <div key={index} className="text-center p-4 bg-white/50 rounded-xl border border-white/30">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                  <div className="text-sm text-slate-600">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Showcase */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm font-semibold text-slate-700">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Vision */}
          <div className="group relative p-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                To be the most trusted and innovative provider of accounting and tax services, recognized globally 
                for delivering excellence, fostering client growth, and setting new standards of professionalism 
                in the financial industry.
              </p>
              <div className="space-y-3">
                {[
                  "Industry-leading innovation in financial services",
                  "Global recognition for excellence and integrity",
                  "Sustainable growth partnerships with clients",
                  "Setting new benchmarks in professional standards"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                To provide comprehensive accounting, tax, and financial services with unwavering precision, 
                complete transparency, and absolute integrity, creating lasting value for our clients and 
                contributing to their sustainable business success.
              </p>
              <div className="space-y-3">
                {[
                  "Precision in every financial transaction",
                  "Transparent and honest client relationships",
                  "Value creation through strategic insights",
                  "Long-term sustainable growth partnerships"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Proven Approach</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              A systematic methodology that ensures consistent results and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold text-emerald-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              The principles that guide every decision, action, and client interaction at AstutePro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/90"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">{value.description}</p>
                  
                  <div className="space-y-2 w-full">
                    {value.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Excellence */}
      

      </div>
    </section>
  );
}

export default About;