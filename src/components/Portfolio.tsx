import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'SkillPro',
      description: 'Piattaforma per la creazione di tornei esports.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zeBSgmjKiBePXf2qPBBCSPCOmVrYZ0Xrmw&s',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-pink-400 to-purple-400'
    },
    {
      title: 'Menu Digitale Sagra paese',
      description: 'Menu Digitale per ordini.',
      image: 'https://perpranzo.it/wp-content/uploads/2021/10/3.png',
      tags: ['React Native', 'Firebase', 'Redux'],
      gradient: 'from-green-400 to-blue-400'
    },
    {
      title: 'Web App Padel',
      description: 'Web App per la gestione e organizzazione di partite di padel.',
      image: 'https://centromedicosanmagno.it/wp-content/uploads/2023/11/paddle-tennis-.jpg',
      tags: ['NestJs', 'NestJs', 'MongoDB'],
      gradient: 'from-orange-400 to-red-400'
    },
   
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 liquid-gradient rounded-full opacity-5 blur-3xl floating"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-64 liquid-gradient rounded-full opacity-10 blur-3xl floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
              Portfolio
            </h2>
            <div className="w-24 h-1 liquid-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Alcuni dei progetti che ho realizzato con passione e dedizione
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="glass-button p-2 rounded-xl hover:scale-110 transition-transform">
                      <ExternalLink size={16} className="text-white" />
                    </button>
                    <button className="glass-button p-2 rounded-xl hover:scale-110 transition-transform">
                      <Github size={16} className="text-white" />
                    </button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={project.image} alt="" className="w-full h-full object-fit" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="glass-card px-3 py-1 text-xs text-white/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 inline-block">
              <p className="text-white/80 mb-4">
                Vuoi vedere altri progetti o discutere del tuo?
              </p>
              <button
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-button rounded-2xl px-8 py-3 text-white font-semibold hover:scale-105 transition-all duration-300 glow"
              >
                Contattami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
