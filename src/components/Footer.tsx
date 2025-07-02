
import { Github, Linkedin, Mail, MessageCircle, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 liquid-gradient rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold gradient-text">Davide</div>
              <p className="text-white/70 leading-relaxed">
                Sviluppatore specializzato in soluzioni web e mobile innovative. 
                Trasformo idee in realtà digitali.
              </p>
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Disponibile per nuovi progetti</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Link Rapidi</h3>
              <div className="space-y-2">
                {['Chi sono', 'Servizi', 'Portfolio', 'Contatti'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contatti</h3>
              <div className="space-y-3">
                <a
                  href="mailto:davidemarino17@gmail.com"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span>davidemarino17@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/+393280675764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-white/80">Seguimi sui social</div>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/davidemarino17/', label: 'Instagram' },
                  { icon: Github, href: 'https://github.com/Marinovs', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/davide-marino-b59b6620b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button p-3 rounded-xl hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-white group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 pt-8 border-t border-white/10">
            <div className="text-white/60 text-sm">
              © {currentYear} Davide Marino. Tutti i diritti riservati.
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Fatto con</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>e tanto caffè ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
