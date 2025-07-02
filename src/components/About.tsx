import { useTheme } from '@/contexts/ThemeContext';
import { translations } from '@/utils/translations';

const About = () => {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <section id="chi-sono" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 liquid-gradient rounded-full opacity-10 blur-3xl floating"></div>
        <div className="absolute bottom-0 left-0 w-96 h-48 liquid-gradient rounded-full opacity-5 blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
              {t.aboutTitle}
            </h2>
            <div className="w-24 h-1 liquid-gradient rounded-full mx-auto"></div>
          </div>
          
          <div className="grid gap-12 items-center">
            {/* Profile Image */}
            {/* Description */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4 font-medium">
                  {t.aboutDescription1}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  {t.aboutDescription2}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t.aboutDescription3}
                </p>
                <div className="mt-8 text-center">
                  <a
                    href="#contatti"
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    {t.contact || 'Contattami'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: '💼', number: '5+', label: t.yearsExperience },
              { icon: '🚀', number: '25+', label: t.completedProjects },
              { icon: '🕑', number: '24/7', label: t.dedicatedSupport }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-transparent hover:border-blue-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-foreground/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
