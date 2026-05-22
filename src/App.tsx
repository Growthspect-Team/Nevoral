/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Truck, 
  ShieldCheck, 
  BadgePercent, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  ChevronLeft,
  Star,
  Quote
} from 'lucide-react';
import lekrosLogo from './assets/i027874607709941324.png';

// --- Components ---

const Logo = () => (
  <div className="relative w-10 h-10 mr-3 shrink-0">
    {/* Gray House */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <path 
        d="M10 40 L50 10 L90 40 V90 H10 Z" 
        fill="none" 
        stroke="#9CA3AF" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
    </svg>
    {/* Red House */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <path 
        d="M45 50 L70 30 L95 50 V85 H45 Z" 
        fill="#B21F1F" 
        stroke="#B21F1F" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Materiály', href: '#materialy' },
    { name: 'O nás', href: '#proc-my' },
    { name: 'Jak to funguje', href: '#jak-to-funguje' },
    { name: 'Reference', href: '#reference' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-brand-red/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo />
          <div className="flex flex-col">
            <span className={`font-display text-2xl leading-none transition-colors duration-500 ${isScrolled ? 'text-brand-black' : 'text-brand-black'}`}>STAVEBNINY NEVORAL</span>
            <span className="font-display text-sm text-brand-red tracking-widest uppercase">Blížkovice</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link font-display text-lg tracking-wide hover:text-brand-red transition-colors duration-500 ${isScrolled ? 'text-brand-black' : 'text-brand-black'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontakt" 
            className="bg-brand-red text-white px-6 py-2 font-display text-lg hover:bg-brand-black transition-all duration-300"
          >
            POPTÁVKA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-brand-black' : 'text-brand-black'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white font-display text-xl border-b border-white/5 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white grain-overlay">
      {/* Background Texture/Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="inline-block border border-brand-red px-4 py-1 mb-6"
        >
          <span className="text-brand-red font-display tracking-[0.4em] text-sm uppercase">30+ LET NA TRHU • OD ROKU 1994</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-brand-black mb-4">
            STAVEBNÍ MATERIÁL, <span className="text-brand-red">KTERÝ DRŽÍ.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-brand-gray max-w-2xl mx-auto mb-10 font-light italic">
            Stavebniny Nevoral – váš spolehlivý dodavatel od základů po střechu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#materialy" 
            className="w-full sm:w-auto bg-brand-red text-white px-10 py-4 font-display text-xl hover:bg-brand-black transition-all duration-300 transform hover:scale-105"
          >
            ZOBRAZIT MATERIÁLY
          </a>
          <a 
            href="#kontakt" 
            className="w-full sm:w-auto border-2 border-brand-black text-brand-black px-10 py-4 font-display text-xl hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 transform hover:scale-105"
          >
            KONTAKTOVAT
          </a>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-red"></div>
      <div className="absolute top-1/4 right-0 w-1 h-32 bg-brand-red/30"></div>
    </section>
  );
};

const TrustPillars = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="text-brand-red" size={48} />,
      title: 'Osobní přístup',
      desc: 'Jsme menší, rodinný obchod. U nás nejste jen číslo, ale partner, kterému vždy ochotně poradíme.'
    },
    {
      icon: <Truck className="text-brand-red" size={48} />,
      title: 'Vlastní doprava',
      desc: 'Máme vlastní techniku i nákladní vozy. Materiál doručíme rychle a přesně tam, kam potřebujete.'
    },
    {
      icon: <BadgePercent className="text-brand-red" size={48} />,
      title: '30+ let zkušeností',
      desc: 'Na trhu působíme již od roku 1994. Za tu dobu jsme dodali materiál na tisíce staveb v regionu.'
    }
  ];

  return (
    <section id="proc-my" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-brand-white rounded-full group-hover:bg-brand-red/10 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-3xl mb-4">{p.title}</h3>
              <p className="text-brand-gray leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialsCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    { 
      title: 'Hrubá & Suchá stavba', 
      desc: 'Kompletní sortiment od základů až po střechu.', 
      details: ['Cihly a tvárnice (HELUZ, POROTHERM)', 'Ztracené bednění', 'Sádrokartony a profily (RIGIPS)', 'Suché směsi a betony', 'Střešní krytiny'],
      icon: '🏗️' 
    },
    { 
      title: 'Dlažby & Ploty', 
      desc: 'Betonové prvky pro váš exteriér a zahradu.', 
      details: ['Zámková a plošná dlažba', 'Obrubníky a palisády', 'Betonové plotové systémy', 'Pletiva a sloupky', 'Zahradní doplňky'],
      icon: '🧱' 
    },
    { 
      title: 'Zateplení & Fasády', 
      desc: 'Systémy pro úsporu energie a krásný vzhled.', 
      details: ['Fasádní polystyren (EPS)', 'Minerální vata', 'Lepidla a stěrky', 'Fasádní omítky a barvy', 'Příslušenství k zateplení'],
      icon: '🏠' 
    },
    { 
      title: 'Věrnostní program', 
      desc: 'Výhody pro firmy i pravidelné zákazníky.', 
      details: ['Individuální cenové podmínky', 'Prioritní termíny dodání', 'Odborné poradenství', 'Možnost platby na fakturu', 'Speciální akce'],
      icon: '🤝' 
    },
    { 
      title: 'Cenové nabídky', 
      desc: 'Nezávazné kalkulace přesně podle projektu.', 
      details: ['Výpočet spotřeby materiálu', 'Optimalizace nákladů', 'Konzultace technických řešení', 'Zpracování do 24 hodin', 'Osobní projednání'],
      icon: '📄' 
    },
    { 
      title: 'Dovoz materiálu', 
      desc: 'Rychlá doprava až na vaši stavbu.', 
      details: ['Auto s hydraulickou rukou', 'Skládání materiálu na místo', 'Rychlý rozvoz dodávkou', 'Flexibilní časy závozu', 'Doprava po celém regionu'],
      icon: '🚚' 
    }
  ];

  return (
    <section id="materialy" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-red font-display tracking-widest text-sm uppercase mb-2 block">Katalog & Služby</span>
            <h2 className="text-5xl md:text-6xl uppercase">VŠE PRO VAŠI STAVBU</h2>
          </div>
          <div className="h-0.5 flex-grow bg-brand-black/10 mx-8 hidden md:block"></div>
          <p className="max-w-xs text-brand-gray italic">
            Prověřené materiály a profesionální služby, které posunou vaši stavbu kupředu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedCategory(cat)}
              className="bg-white p-10 border border-brand-black/5 border-t-4 border-t-brand-red shadow-sm card-lift group cursor-pointer flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-brand-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 p-10 flex flex-col">
                <h4 className="text-white text-2xl mb-6 font-display uppercase tracking-wider">{cat.title}</h4>
                <ul className="space-y-3">
                  {cat.details.map((detail, idx) => (
                    <li key={idx} className="text-white/80 flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-red mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-brand-red font-display text-lg flex items-center">
                  ZOBRAZIT DETAIL <ChevronRight size={20} className="ml-2" />
                </div>
              </div>

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
              <h3 className="text-3xl text-brand-black mb-4">{cat.title}</h3>
              <p className="text-brand-gray mb-8 flex-grow leading-relaxed">
                {cat.desc}
              </p>
              <div className="flex items-center text-brand-red font-display text-lg mt-auto">
                ZJISTIT VÍCE <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="bg-white w-full max-w-2xl relative z-10 p-8 md:p-16 border-t-8 border-brand-red"
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="absolute top-8 right-8 text-brand-black hover:text-brand-red transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="text-6xl mb-8">{selectedCategory.icon}</div>
              <h3 className="text-5xl mb-6 uppercase leading-tight">{selectedCategory.title}</h3>
              <p className="text-xl text-brand-gray mb-10 italic">{selectedCategory.desc}</p>
              
              <div className="space-y-4 mb-12">
                <h4 className="text-brand-red font-display tracking-widest uppercase text-sm mb-6">Co vše nabízíme:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedCategory.details.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-red mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-lg text-brand-black">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kontakt" 
                  onClick={() => setSelectedCategory(null)}
                  className="bg-brand-red text-white px-10 py-4 font-display text-xl text-center hover:bg-brand-black transition-colors"
                >
                  POPTAT CENU
                </a>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="border-2 border-brand-black text-brand-black px-10 py-4 font-display text-xl hover:bg-brand-black hover:text-white transition-colors"
                >
                  ZAVŘÍT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutStory = () => {
  return (
    <section id="o-nas" className="py-24 bg-brand-light text-brand-black overflow-hidden grain-overlay">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-[12rem] font-display text-brand-red/5 absolute -top-20 -left-10 select-none">30</div>
            <h2 className="text-6xl md:text-7xl uppercase mb-8 relative z-10 leading-none">TŘICET LET <br/> <span className="text-brand-red">ZKUŠENOSTÍ</span></h2>
            <p className="text-xl text-brand-gray leading-relaxed mb-8">
              Naše rodinná tradice ve stavebnictví sahá až do roku 1994, kdy otec začínal s prodejem stavebních materiálů. Za více než 30 let na trhu jsme vybudovali stabilní firmu, která sází na odbornost, spolehlivost a lidský přístup.
            </p>
            <p className="text-xl text-brand-gray leading-relaxed">
              I když se trh mění, naše hodnoty zůstávají stejné. Každý zákazník u nás dostane individuální péči, kterou ve velkých řetězcích nenajde. Ať už stavíte svépomocí nebo realizujete velký projekt, jsme tu pro vás s radou i materiálem.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 bg-brand-red/5 border border-brand-red/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-display text-brand-red">30+</div>
                  <div className="text-xs uppercase tracking-widest text-brand-gray">Let zkušeností</div>
                </div>
              </div>
              <div className="h-80 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"></div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-80 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"></div>
              <div className="h-64 bg-white border border-brand-black/5 flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <div className="text-5xl font-display text-brand-black">100%</div>
                  <div className="text-xs uppercase tracking-widest text-brand-gray">Osobní přístup</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Poptávka',
      desc: 'Popište nám svůj projekt a co přesně potřebujete. Stačí zavolat nebo vyplnit formulář.'
    },
    {
      num: '02',
      title: 'Kalkulace',
      desc: 'Zpracujeme pro vás přesnou cenovou nabídku na míru v co nejkratším čase.'
    },
    {
      num: '03',
      title: 'Dodávka',
      desc: 'Po schválení dohodneme termín a materiál přivezeme přímo na vaši stavbu.'
    }
  ];

  return (
    <section id="jak-to-funguje" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl text-center mb-20">JAK TO FUNGUJE</h2>
        
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-black/5 -translate-y-1/2 hidden md:block"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-white p-8 border border-brand-black/5 shadow-sm">
              <span className="step-number">{step.num}</span>
              <h3 className="text-4xl mb-6 text-brand-red">{step.title}</h3>
              <p className="text-brand-gray leading-relaxed relative z-20">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partner = () => {
  return (
    <section className="py-14 bg-white text-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8 border-y border-brand-black/10 py-12">
          <p className="text-brand-red tracking-[0.3em] uppercase font-medium">Partner</p>
          <a href="https://www.lekros.eu/" target="_blank" rel="noopener noreferrer">
            <img
              src={lekrosLogo}
              alt="Lekros"
              className="w-full max-w-[340px] h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Mikrobagry CZ',
      text: 'Menší, ale skvěle zásobený obchůdek se stavebninami v Blížkovicích. Vždycky tu ochotně poradí a snaží se pomoct i s drobnostmi, které jinde neseženu.',
      rating: 5,
      date: 'před 4 měsíci'
    },
    {
      name: 'Pavel Fouček',
      text: 'Mají nad rámec dobrý výběr sortimentu a pokud něco není ochotně rychle zařídí.',
      rating: 5,
      date: 'před rokem'
    },
    {
      name: 'Sergei Kříkavský',
      text: 'Skvělý obchod a skvělé ceny!',
      rating: 5,
      date: 'před 8 měsíci'
    },
    {
      name: 'Pro Co',
      text: 'Velký výběr, ochotný prodejce.',
      rating: 5,
      date: 'před 5 lety'
    },
    {
      name: 'Radek Drahovzal',
      text: 'Malé ale dobré stavebniny',
      rating: 5,
      date: 'před 4 lety'
    },
    {
      name: 'Lubos Ma.',
      text: '',
      rating: 5,
      date: 'před 7 měsíci'
    },
    {
      name: 'Tomas Dominik',
      text: '',
      rating: 5,
      date: 'před 2 lety'
    },
    {
      name: 'TECHNIKA HOCKEY BRNO',
      text: '',
      rating: 2,
      date: 'před 4 lety'
    },
    {
      name: 'Vít Steindlberger',
      text: '',
      rating: 5,
      date: 'před 5 lety'
    },
    {
      name: 'Jindřich Nevoral',
      text: '',
      rating: 5,
      date: 'před 6 lety'
    },
    {
      name: 'Miroslav Velek',
      text: '',
      rating: 4,
      date: 'před 6 lety'
    },
    {
      name: 'David Sehon',
      text: '',
      rating: 5,
      date: 'před 7 lety'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reference" className="py-24 bg-brand-light text-brand-black grain-overlay overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4 uppercase">ŘEKLI O NÁS</h2>
            <p className="text-brand-red tracking-[0.3em] uppercase font-medium">Ověřené recenze • Google Business</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-16 h-16 border border-brand-black/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group"
            >
              <ChevronLeft className="group-hover:scale-110 transition-transform group-hover:text-white" />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 border border-brand-black/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group"
            >
              <ChevronRight className="group-hover:scale-110 transition-transform group-hover:text-white" />
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="bg-white p-8 md:p-16 border-l-8 border-brand-red relative shadow-sm">
                {reviews[currentIndex].text && <Quote className="absolute top-8 right-8 text-brand-red/5" size={120} />}
                <div className="flex mb-8">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-brand-red fill-brand-red mr-1" />
                  ))}
                </div>
                {reviews[currentIndex].text && (
                  <p className="text-2xl md:text-4xl italic mb-10 text-brand-black leading-tight max-w-4xl">
                    "{reviews[currentIndex].text}"
                  </p>
                )}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-brand-red"></div>
                  <div>
                    <h4 className="text-2xl font-display uppercase tracking-wider">{reviews[currentIndex].name}</h4>
                    <p className="text-brand-red text-xs uppercase tracking-widest mt-1">{reviews[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {reviews.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${i === currentIndex ? 'w-12 bg-brand-red' : 'w-4 bg-brand-black/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdaywaga', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <h2 className="text-5xl md:text-6xl mb-8">POJĎME SE DO TOHO PUSTIT</h2>
            <p className="text-xl text-brand-gray mb-12 italic">
              Zavolejte mi nebo napište, najdeme nejlepší řešení pro vaši stavbu.
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-brand-red/5 flex items-center justify-center mr-6">
                  <Phone className="text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray uppercase tracking-widest mb-1">Telefon</p>
                  <a href="tel:+420608521359" className="text-2xl font-display hover:text-brand-red transition-colors">+420 608 521 359</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-brand-red/5 flex items-center justify-center mr-6">
                  <Mail className="text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:vojtech.nevoral@email.cz" className="text-2xl font-display hover:text-brand-red transition-colors">vojtech.nevoral@email.cz</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-brand-red/5 flex items-center justify-center mr-6">
                  <MapPin className="text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-brand-gray uppercase tracking-widest mb-1">Lokalita</p>
                  <p className="text-2xl font-display">Blížkovice 213, 671 55</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-brand-red/5 flex items-center justify-center mr-6">
                  <span className="text-brand-red font-display text-xl">IČ</span>
                </div>
                <div>
                  <p className="text-sm text-brand-gray uppercase tracking-widest mb-1">Identifikační číslo</p>
                  <p className="text-2xl font-display">05889286</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center p-4 bg-white border border-brand-black/5 inline-flex shadow-sm">
              <div className="pulse-dot mr-3">
                <span></span>
                <span></span>
              </div>
              <span className="font-display text-lg uppercase tracking-wider">Aktuálně přijímáme nové poptávky</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-16 shadow-2xl relative border border-brand-black/5">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-red/5 -z-10"></div>
            
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="w-20 h-20 bg-brand-red/10 flex items-center justify-center mb-8">
                  <ShieldCheck className="text-brand-red" size={40} />
                </div>
                <h3 className="text-4xl font-display mb-4">ODESLÁNO!</h3>
                <p className="text-brand-gray text-xl italic">Děkujeme za poptávku. Vojtěch vás co nejdříve kontaktuje.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 border-2 border-brand-black text-brand-black px-8 py-3 font-display hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors"
                >
                  ODESLAT DALŠÍ
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-brand-gray text-sm uppercase tracking-widest mb-2 font-display">Jméno a příjmení</label>
                  <input
                    type="text"
                    name="jmeno"
                    required
                    className="w-full bg-brand-light border border-brand-black/5 p-4 text-brand-black focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-brand-gray text-sm uppercase tracking-widest mb-2 font-display">Telefonní číslo</label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    className="w-full bg-brand-light border border-brand-black/5 p-4 text-brand-black focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="+420 777 000 000"
                  />
                </div>
                <div>
                  <label className="block text-brand-gray text-sm uppercase tracking-widest mb-2 font-display">Vaše zpráva / Poptávka</label>
                  <textarea
                    rows={4}
                    name="zprava"
                    required
                    className="w-full bg-brand-light border border-brand-black/5 p-4 text-brand-black focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Dobrý den, poptávám 20 palet cihel..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-brand-red text-sm font-display">Něco se pokazilo. Zkuste to prosím znovu nebo zavolejte na +420 608 521 359.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-red text-white py-5 font-display text-2xl hover:bg-brand-black transition-all duration-300 disabled:opacity-60"
                >
                  {status === 'sending' ? 'ODESÍLÁM...' : 'ODESLAT POPTÁVKU'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t-4 border-brand-red">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <Logo />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-display text-2xl text-brand-black leading-none">STAVEBNINY NEVORAL</span>
              <span className="font-display text-sm text-brand-red tracking-widest uppercase">Blížkovice</span>
            </div>
          </div>

          <div className="flex space-x-8">
            <a href="#materialy" className="text-brand-gray hover:text-brand-red transition-colors font-display">MATERIÁLY</a>
            <a href="#proc-my" className="text-brand-gray hover:text-brand-red transition-colors font-display">O NÁS</a>
            <a href="#kontakt" className="text-brand-gray hover:text-brand-red transition-colors font-display">KONTAKT</a>
          </div>

          <div className="text-brand-gray text-sm text-center md:text-right">
            <p className="mb-1">IČO: 05889286</p>
            <p>© {new Date().getFullYear()} Vojtěch Nevoral. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingActionButton = () => {
  return (
    <motion.a
      href="tel:+420608521359"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
className="fixed bottom-5 left-5 z-[100] w-10 h-10 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center md:hidden"    >
      <Phone size={22} />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustPillars />
        <AboutStory />
        <MaterialsCatalog />
        <HowItWorks />
        <Partner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
