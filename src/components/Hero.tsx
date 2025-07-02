
import { ArrowRight, Code, Smartphone } from 'lucide-react';
import Avatar from "@/assets/images/avatar.png"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 liquid-gradient rounded-full opacity-20 blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 liquid-gradient rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 liquid-gradient rounded-full opacity-15 blur-3xl floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 animate-fade-in-up">
            {/* Profile Avatar */}
            <div className="flex flex-col items-center mb-6 animate-fade-in">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-2 border-blue-100 dark:border-[#393d63] bg-white/60 dark:bg-[#232946]/60 backdrop-blur-lg flex items-center justify-center animated-floating-3d">
              <img src={Avatar} alt="Davide avatar"  />
            </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Davide Marino</span>
            </h1>



            {/* Services Preview */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: Code, text: 'Siti Web' },
                { icon: Smartphone, text: 'E-commerce' },
                { icon: Code, text: 'App Mobile' }
              ].map((item, index) => (
                <div key={index} className="glass-card rounded-2xl px-4 py-2 flex items-center space-x-2">
                  <item.icon size={16} className="text-blue-400" />
                  <span className="text-sm text-white/90">{item.text}</span>
                </div>
              ))}
            </div> */}

            {/* Description */}
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Trasformo le tue idee in realtà digitali attraverso soluzioni moderne e innovative. 
              Siti web responsive, e-commerce performanti, gestionali personalizzati e app mobile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="glass-button rounded-2xl px-8 py-4 text-white font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 glow group"
              >
                <span>Parliamone!</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-card rounded-2xl px-8 py-4 text-white/90 font-medium hover:bg-white/10 transition-all duration-300"
              >
                Vedi i progetti
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 glass-card rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
