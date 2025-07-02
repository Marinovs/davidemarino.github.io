
export const translations = {
  it: {
    // Header
    home: 'Home',
    about: 'Chi sono',
    services: 'Servizi',
    portfolio: 'Portfolio',
    contact: 'Contatti',
    
    // Hero
    heroTitle: 'Sviluppatore Web e Mobile',
    heroSubtitle: 'Trasformo le tue idee in realtà digitali',
    heroDescription: 'Siti web, e-commerce, gestionali, menu digitali e app mobili. Soluzioni personalizzate per far crescere il tuo business.',
    startProject: 'Inizia il tuo progetto',
    viewPortfolio: 'Guarda i miei lavori',
    
    // About
    aboutTitle: 'Chi sono',
    aboutDescription1: 'Ciao! Sono Davide, uno sviluppatore web e mobile di 28 anni con una grande passione per la tecnologia e l\'innovazione digitale.',
    aboutDescription2: 'Da anni mi dedico alla creazione di soluzioni digitali personalizzate, aiutando aziende e professionisti a trasformare le loro idee in realtà concrete.',
    aboutDescription3: 'Il mio obiettivo è sempre quello di creare prodotti che non solo funzionino perfettamente, ma che offrano anche un\'esperienza utente eccezionale.',
    yearsExperience: 'Anni di esperienza',
    completedProjects: 'Progetti completati',
    satisfiedClients: 'Clienti soddisfatti',
    dedicatedSupport: 'Supporto dedicato',
    
    // Services
    servicesTitle: 'Cosa posso fare per te',
    websitesTitle: 'Siti Web',
    websitesDescription: 'Siti web moderni, responsive e ottimizzati per tutti i dispositivi.',
    ecommerceTitle: 'E-commerce',
    ecommerceDescription: 'Piattaforme di vendita online complete e personalizzate.',
    managementTitle: 'Gestionali',
    managementDescription: 'Software personalizzati per ottimizzare i processi aziendali.',
    digitalMenuTitle: 'Menu Digitali',
    digitalMenuDescription: 'Soluzioni innovative per ristoranti e bar con QR code.',
    mobileAppsTitle: 'App Mobile',
    mobileAppsDescription: 'App native per iOS e Android con design accattivante.',
    
    // Portfolio
    portfolioTitle: 'I miei progetti',
    portfolioSubtitle: 'Alcuni dei lavori che ho realizzato',
    viewProject: 'Visualizza progetto',
    
    // Contact
    contactTitle: 'Parliamone!',
    contactSubtitle: 'Hai un progetto in mente? Raccontamelo!',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    messageLabel: 'Messaggio',
    sendMessage: 'Invia messaggio',
    
    // Footer
    footerDescription: 'Sviluppatore specializzato in soluzioni web e mobile innovative. Trasformo idee in realtà digitali.',
    availableProjects: 'Disponibile per nuovi progetti',
    quickLinks: 'Link Rapidi',
    contactInfo: 'Contatti',
    followSocial: 'Seguimi sui social',
    rightsReserved: 'Tutti i diritti riservati.',
    madeWith: 'Fatto con',
    andCoffee: 'e tanto caffè ☕'
  },
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Web & Mobile Developer',
    heroSubtitle: 'Turning your ideas into digital reality',
    heroDescription: 'Websites, e-commerce, management systems, digital menus and mobile apps. Custom solutions to grow your business.',
    startProject: 'Start your project',
    viewPortfolio: 'View my work',
    
    // About
    aboutTitle: 'About me',
    aboutDescription1: 'Hi! I\'m Davide, a 28-year-old web and mobile developer with a great passion for technology and digital innovation.',
    aboutDescription2: 'For years I have been dedicated to creating personalized digital solutions, helping companies and professionals transform their ideas into concrete reality.',
    aboutDescription3: 'My goal is always to create products that not only work perfectly, but also offer an exceptional user experience.',
    yearsExperience: 'Years of experience',
    completedProjects: 'Completed projects',
    satisfiedClients: 'Satisfied clients',
    dedicatedSupport: 'Dedicated support',
    
    // Services
    servicesTitle: 'What I can do for you',
    websitesTitle: 'Websites',
    websitesDescription: 'Modern, responsive websites optimized for all devices.',
    ecommerceTitle: 'E-commerce',
    ecommerceDescription: 'Complete and customized online sales platforms.',
    managementTitle: 'Management Systems',
    managementDescription: 'Custom software to optimize business processes.',
    digitalMenuTitle: 'Digital Menus',
    digitalMenuDescription: 'Innovative solutions for restaurants and bars with QR codes.',
    mobileAppsTitle: 'Mobile Apps',
    mobileAppsDescription: 'Native iOS and Android apps with attractive design.',
    
    // Portfolio
    portfolioTitle: 'My projects',
    portfolioSubtitle: 'Some of the work I have done',
    viewProject: 'View project',
    
    // Contact
    contactTitle: 'Let\'s talk!',
    contactSubtitle: 'Have a project in mind? Tell me about it!',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    sendMessage: 'Send message',
    
    // Footer
    footerDescription: 'Developer specialized in innovative web and mobile solutions. I transform ideas into digital realities.',
    availableProjects: 'Available for new projects',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followSocial: 'Follow me on social',
    rightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    andCoffee: 'and lots of coffee ☕'
  }
};

export type TranslationKey = keyof typeof translations.it;
