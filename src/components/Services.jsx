import React from 'react';
import {
  Package,
  Wrench,
  CheckCircle2,
  Clock,
  Brain,
  Shield,
} from 'lucide-react';
import { services } from '../data/products';

const iconMap = {
  Package: Package,
  Wrench: Wrench,
  CheckCircle2: CheckCircle2,
  Clock: Clock,
  Brain: Brain,
  Shield: Shield,
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
            <span className="text-orange-400 font-bold text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Comprehensive Fire <span className="text-gradient">Safety</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From supply to maintenance, we've got all your fire safety needs covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-in">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 hover-lift h-full transition-all duration-300">
                  {/* Icon Container */}
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl group-hover:from-red-500/40 group-hover:to-orange-500/40 group-hover:scale-110 transition-all border border-red-500/20 group-hover:border-red-500/50">
                    <Icon size={32} className="text-red-400 group-hover:text-red-300 transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-red-400 hover:text-orange-400 font-bold group/link transition-colors"
                  >
                    Learn More
                    <span className="ml-2 group-hover/link:translate-x-2 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Process */}
        <div className="mt-20 glass rounded-3xl p-12 border border-red-500/20">
          <h3 className="text-4xl font-black text-white text-center mb-16">
            Our Service <span className="text-gradient">Process</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'We evaluate your property and safety requirements.',
              },
              {
                step: '02',
                title: 'Recommendation',
                description: 'Expert advice on suitable fire safety solutions.',
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation by trained technicians.',
              },
              {
                step: '04',
                title: 'Maintenance',
                description: 'Regular check-ups and annual maintenance service.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group relative">
                <div className="inline-block mb-6 w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AMC Information */}
        <div className="mt-20 glass rounded-3xl p-12 border border-orange-500/30 hover-lift">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 glass px-4 py-2 rounded-full">
                <span className="text-orange-400 font-bold text-sm">ANNUAL MAINTENANCE</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-6">
                AMC Services
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Our comprehensive AMC ensures your fire safety equipment remains in optimal condition throughout the year.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Regular equipment inspection and testing',
                  'Preventive maintenance and repairs',
                  'Priority emergency response',
                  'Spare parts replacement (if needed)',
                  '24/7 customer support hotline',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 size={22} className="text-red-400 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-gradient text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg text-lg">
                Get AMC Quote
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="glass rounded-2xl p-8 border border-red-500/20 hover-lift">
                <p className="text-sm text-gray-400 uppercase font-bold mb-3 tracking-widest">
                  Response Time
                </p>
                <p className="text-4xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Within 24 Hours
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-8 border border-orange-500/20 hover-lift">
                  <p className="text-sm text-gray-400 uppercase font-bold mb-3 tracking-widest">
                    Coverage
                  </p>
                  <p className="text-3xl font-black text-white">
                    All India
                  </p>
                </div>
                <div className="glass rounded-2xl p-8 border border-red-500/20 hover-lift">
                  <p className="text-sm text-gray-400 uppercase font-bold mb-3 tracking-widest">
                    Uptime
                  </p>
                  <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    99.9%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
