
import { useState } from 'react';
import { Mail, MessageCircle, Send, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulated form submission
    if (formData.name && formData.email && formData.message) {
      toast.success('Messaggio inviato! Ti risponderò al più presto.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Per favore compila tutti i campi.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contatti" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 liquid-gradient rounded-full opacity-5 blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 liquid-gradient rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
              Contattami
            </h2>
            <div className="w-24 h-1 liquid-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Hai un progetto in mente? Parliamone insieme e trasformiamo la tua idea in realtà
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-6">Invia un messaggio</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white/90 mb-2 block">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="Il tuo nome"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white/90 mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                    placeholder="la.tua@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white/90 mb-2 block">Messaggio *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 min-h-[120px]"
                    placeholder="Raccontami del tuo progetto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glass-button hover:scale-105 transition-all duration-300 glow py-3 rounded-2xl text-white font-semibold"
                >
                  <Send size={20} className="mr-2" />
                  Invia Messaggio
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Quick Contact */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contatto Rapido</h3>
                
                <div className="space-y-6">
                  <a
                    href="mailto:davide@example.com"
                    className="flex items-center space-x-4 glass-button rounded-2xl p-4 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-white/70 text-sm">davidemarino17@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/+393280675764"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 glass-button rounded-2xl p-4 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">WhatsApp</div>
                      <div className="text-white/70 text-sm">Messaggio diretto</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 glass-card rounded-2xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Telefono</div>
                      <div className="text-white/70 text-sm">+39 328 067 5764</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Disponibilità</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Lun - Ven</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Solo urgenze</span>
                  </div>
                </div>
                <div className="mt-4 p-3 glass-card rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm">Disponibile per nuovi progetti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
