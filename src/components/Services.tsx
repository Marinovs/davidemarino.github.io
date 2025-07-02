import { Code, ShoppingCart, Settings, Utensils, Smartphone, User } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Siti Web',
      description: 'Siti web moderni, responsive e ottimizzati per tutti i dispositivi. Design accattivante e performance elevate.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Negozi online completi con sistemi di pagamento sicuri, gestione inventario e dashboard amministrativa.',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Settings,
      title: 'Gestionale Personalizzato',
      description: 'Software su misura per automatizzare i processi aziendali e migliorare l\'efficienza operativa.',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: Utensils,
      title: 'Menu Digitale',
      description: 'Menu interattivi per ristoranti e bar con QR code, aggiornamenti in tempo reale e gestione ordini.',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Applicazioni native per iOS e Android con design intuitivo e funzionalità avanzate.',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: User,
      title: 'Consulenza Digitale',
      description: 'Supporto strategico per la trasformazione digitale, analisi dei processi e soluzioni su misura per la crescita del tuo business.',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="servizi" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 liquid-gradient rounded-full opacity-5 blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 liquid-gradient rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
              Cosa posso fare per te
            </h2>
            <div className="w-24 h-1 liquid-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Soluzioni digitali complete per trasformare la tua idea in un successo
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 group animate-fade-in-up floating"
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: `${6 + index}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 glow`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 inline-block">
              <p className="text-white/80 mb-4">
                Hai un progetto in mente? Parliamone insieme!
              </p>
              <button
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-button rounded-2xl px-8 py-3 text-white font-semibold hover:scale-105 transition-all duration-300 glow"
              >
                Iniziamo subito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
