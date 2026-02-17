import React, { useRef } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const extinguisherRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createPowderParticles = (e) => {
    const container = extinguisherRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create 20-30 powder particles
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.className = 'powder-particle powder-spray';
      
      // Random spray direction
      const angle = (Math.random() * 360) * (Math.PI / 180);
      const velocity = 100 + Math.random() * 150;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 50;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.left = centerX + 'px';
      particle.style.top = centerY + 'px';

      document.body.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => particle.remove(), 800);
    }
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-32 pb-24 relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-15 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="slide-up">
            <div className="inline-block mb-4 sm:mb-6 glass px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md group hover-lift">
              <span className="text-red-400 font-bold text-xs sm:text-sm flex items-center gap-2">
                <Shield size={16} className="text-orange-500" />
                Trusted Safety Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Complete Fire <span className="text-gradient">Safety</span> Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-lg">
              We provide certified fire protection equipment, installation, and maintenance services to keep your property safe 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12">
              <button
                onClick={() => scrollToSection('products')}
                className="btn-gradient text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 group text-base sm:text-lg shadow-xl"
              >
                View Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10 text-base sm:text-lg"
              >
                Get Free Quote
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-sm">
              <div className="glass p-4 sm:p-5 rounded-xl text-center hover-lift transition-all duration-300">
                <p className="font-black text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">500+</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Installations</p>
              </div>
              <div className="glass p-4 sm:p-5 rounded-xl text-center hover-lift transition-all duration-300">
                <p className="font-black text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">10+</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Years Active</p>
              </div>
              <div className="glass p-4 sm:p-5 rounded-xl text-center hover-lift transition-all duration-300">
                <p className="font-black text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">24/7</p>
                <p className="text-gray-400 text-xs sm:text-sm mt-2">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-64 sm:h-80 lg:h-full flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-full max-h-96 flex items-center justify-center">
              {/* Floating Background Orbs */}
              <div className="absolute w-72 h-72 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>

              {/* Fire Extinguisher with Glow */}
              <div 
                ref={extinguisherRef}
                className="relative z-10 w-32 sm:w-40 lg:w-48 h-40 sm:h-52 lg:h-64 group cursor-pointer"
                onMouseEnter={createPowderParticles}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 glow-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-b from-red-600 to-red-700 rounded-3xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden border-2 border-red-500/30 group-hover:extinguisher-active flex flex-col items-center justify-start pt-2">
                  {/* Top Cap/Valve */}
                  <div className="w-8 sm:w-10 h-4 sm:h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-lg shadow-lg mb-1"></div>
                  
                  {/* Handle/Trigger Area */}
                  <div className="absolute top-6 sm:top-8 right-3 sm:right-4 w-2 sm:w-2.5 h-6 sm:h-8 bg-gray-800 rounded-full shadow-md group-hover:bg-gray-700 transition-all"></div>
                  
                  {/* Main Body with metallic gradient */}
                  <div className="relative w-20 sm:w-24 lg:w-28 h-24 sm:h-32 lg:h-40 bg-gradient-to-b from-red-500 via-red-600 to-red-800 rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    {/* Safety Pin */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 sm:h-4 bg-yellow-300 rounded-full animate-pulse"></div>
                    
                    {/* Left Indicator Stripe */}
                    <div className="absolute left-2 sm:left-3 top-6 sm:top-8 w-1 sm:w-1.5 h-8 sm:h-12 bg-yellow-300 rounded-full shadow-lg"></div>
                    
                    {/* Center Brand Text */}
                    <div className="text-center z-10">
                      <p className="text-xs sm:text-sm font-black text-white tracking-wider">FIRE</p>
                      <p className="text-xs sm:text-sm font-black text-white tracking-wider leading-tight">SAFE</p>
                    </div>
                    
                    {/* Bottom Nozzle */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-2 sm:h-3 bg-gray-800 rounded-b-lg shadow-lg"></div>
                    
                    {/* Pressure Indicator Dots */}
                    <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 sm:gap-1.5">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full shadow-lg glow-pulse"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full shadow-lg"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-300 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl float"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    
    </section>
  );
}
