import React from 'react';
import {
  Flame,
  Wind,
  Droplets,
  AlertTriangle,
  Eye,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { products } from '../data/products';

const iconMap = {
  Flame: Flame,
  Wind: Wind,
  Droplets: Droplets,
  AlertTriangle: AlertTriangle,
  Eye: Eye,
  Zap: Zap,
};

export default function Products() {
  return (
    <section id="products" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
            <span className="text-red-400 font-bold text-sm">PREMIUM PRODUCTS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional fire safety equipment certified and ready for installation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-in">
          {products.map((product, index) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.id}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-2xl overflow-hidden hover-lift transition-all duration-300 h-full border border-red-500/10 hover:border-red-500/30">
                  {/* Card Header with Icon */}
                  <div className="h-40 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-600/20 group-hover:to-red-600/40 transition-all duration-300"></div>
                    <Icon size={64} className="text-white relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Capacities */}
                    <div className="mb-8">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">
                        Available Options
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {product.capacities.map((capacity, idx) => (
                          <span
                            key={idx}
                            className="inline-block glass px-4 py-2 text-xs font-bold text-gray-200 rounded-lg group-hover:border-red-500/60 group-hover:bg-red-500/10 transition-all border border-gray-500/20"
                          >
                            {capacity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full btn-gradient text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-lg">
                      Learn More
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass rounded-3xl p-12 text-center border border-red-500/30 hover-lift group">
          <h3 className="text-4xl font-black text-white mb-6">
            Need a Custom <span className="text-gradient">Solution?</span>
          </h3>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact our experts for personalized recommendations based on your property requirements.
          </p>
          <button className="btn-gradient text-white font-bold py-4 px-10 rounded-xl transition-all text-lg shadow-xl">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
