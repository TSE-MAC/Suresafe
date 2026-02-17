import React from 'react';
import { CheckCircle2, Award, Zap, Users } from 'lucide-react';
import { features } from '../data/products';

export default function About() {
  const featureIcons = {
    'Certified Products': Award,
    'Professional Installation': CheckCircle2,
    '24/7 Support': Zap,
    'Annual Maintenance': Users,
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
            <span className="text-red-400 font-bold text-sm">ABOUT US</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            About <span className="text-gradient">SureSafe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted Fire Safety Solutions Since 2014
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div className="slide-up">
            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
              SureSafe Fire Safety Solutions is a trusted supplier and service provider of certified fire safety equipment. We specialize in supplying, installing, and maintaining fire protection systems for residential, commercial, and industrial properties.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
              With over a decade of experience, we have become the preferred choice for thousands of satisfied customers across India. Our commitment to quality, professionalism, and customer satisfaction is unmatched.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We believe in protecting lives and property through reliable, certified fire safety solutions backed by expert service and support.
            </p>
          </div>

          {/* Stats Grid - Fully Visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="glass p-6 sm:p-8 rounded-2xl border border-red-500/20 hover-lift group text-center transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2 sm:mb-3">500+</p>
              <p className="text-white font-bold text-base sm:text-lg">Installations</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Completed Successfully</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl border border-orange-500/20 hover-lift group text-center transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-3">10+</p>
              <p className="text-white font-bold text-base sm:text-lg">Years</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Industry Experience</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl border border-red-500/20 hover-lift group text-center transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2 sm:mb-3">2000+</p>
              <p className="text-white font-bold text-base sm:text-lg">Happy Clients</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Across India</p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl border border-orange-500/20 hover-lift group text-center transition-all duration-300">
              <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 sm:mb-3">24/7</p>
              <p className="text-white font-bold text-base sm:text-lg">Support</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Emergency Service</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.title];
            return (
              <div
                key={index}
                className="glass p-6 sm:p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 hover-lift group transition-all duration-300"
                style={{ animation: `slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`, animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="mb-4 sm:mb-5 inline-block p-3 sm:p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl group-hover:from-red-500/40 group-hover:to-orange-500/40 transition-all border border-red-500/20 group-hover:border-red-500/50">
                  <Icon size={28} className="text-red-400 group-hover:text-red-300 transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
